import { API_BASE_URL } from "../core/constants";
import axios from "axios";
import { Mutex } from "async-mutex";
import {
  getApiRefRemote,
  isApiRefError,
  retrieveLocalApiRef,
  storeLocalApiRef,
} from "./apiRefManager";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const mutex = new Mutex();

api.interceptors.request.use(
  async (config) => {
    const apiRef = retrieveLocalApiRef();
    if (!apiRef) {
      return Promise.reject({
        config,
        response: {
          status: 400,
          statusText: "api_validation_error",
          data: "Please specify ref",
        },
      });
    }

    config.params = {
      ...config.params,
      ref: apiRef,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    await mutex.waitForUnlock();
    const originalRequest = error.config;
    if (
      error.response &&
      isApiRefError(error.response) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const apiRef = await getApiRefRemote();
          await storeLocalApiRef(apiRef);
          return await api(originalRequest);
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        return await api(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

api.defaults.paramsSerializer = {
  serialize: (params) => {
    const newParams = Object.keys(params).map((key) => {
      let value;
      if (Array.isArray(params[key]) && params[key]?.length > 0) {
        value = params[key].map(encodeURIComponent).join("&" + key + "=");
      } else {
        value = encodeURIComponent(params[key]);
      }
      return `${key}=${value}`;
    });
    return newParams.join("&");
  },
};

export default api;
