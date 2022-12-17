import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { API_BASE_URL } from "../../../utils/constants";
import { clearApiRef, selectApiRef, updateApiRef } from "./apiRefSlice";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL });

const baseQueryWithApiRef = async (args, api, extraOptions) => {
  const apiRef = selectApiRef(api.getState());
  if (!apiRef) {
    return {
      error: {
        status: 400,
        statusText: "api_validation_error",
        data: "Please specify ref",
      },
    };
  }

  const urlEnd = typeof args === "string" ? args : args.url;
  const url = new URL(`${API_BASE_URL}${urlEnd}`);
  url.searchParams.set("ref", apiRef);
  const adjustedUrl = url.toString().substring(API_BASE_URL.length);
  const adjustedArgs =
    typeof args === "string" ? adjustedUrl : { ...args, url: adjustedUrl };

  return baseQuery(adjustedArgs, api, extraOptions);
};

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQueryWithApiRef(args, api, extraOptions);
  if (result.error && isApiRefError(result.error)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const apiRef = await getApiRef();
        if (apiRef) {
          api.dispatch(updateApiRef(apiRef));
          result = await baseQueryWithApiRef(args, api, extraOptions);
        } else {
          api.dispatch(clearApiRef());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQueryWithApiRef(args, api, extraOptions);
    }
  }
  return result;
};

const getApiRef = async () => {
  const response = await fetch(API_BASE_URL);
  const { refs: [{ ref } = {}] = [] } = await response.json();
  return ref;
};

const isApiRefError = (error) => {
  return (
    (error.status === 400 && error.data.includes("ref")) ||
    (error.status === 404 && error.statusText === "api_notfound_error")
  );
};

export default baseQueryWithReAuth;
