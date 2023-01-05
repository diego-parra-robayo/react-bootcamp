import axios from "axios";
import { API_BASE_URL, API_REF_KEY } from "../utils/constants";

export const getApiRefRemote = async () => {
  const response = await axios.get(API_BASE_URL);
  const { refs: [{ ref } = {}] = [] } = response.data;
  await localStorage.setItem(API_REF_KEY, ref);
  return ref;
};

export const storeLocalApiRef = async (ref) => {
  await localStorage.setItem(API_REF_KEY, ref);
};

export const retrieveLocalApiRef = () => {
  return localStorage.getItem(API_REF_KEY);
};

export const isApiRefError = (error) => {
  return (
    (error.status === 400 && error.data.includes("ref")) ||
    (error.status === 404 && error.statusText === "api_notfound_error")
  );
};
