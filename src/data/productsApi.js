import api from "./api";
import { defaultLanguage } from "../utils/constants";

export const getFeaturedProducts = async (config = {}) => {
  const response = await api.get("/documents/search", {
    ...config,
    params: {
      ...config.params,
      q: [
        '[[at(document.type, "product")]]',
        '[[at(document.tags, ["Featured"])]]',
      ],
      pageSize: config.params?.pageSize ?? 16,
      lang: config.params?.lang ?? defaultLanguage,
    },
  });
  return response.data;
};

export const getProducts = async (config = {}) => {
  const response = await api.get("documents/search", {
    ...config,
    params: {
      ...config.params,
      q: '[[at(document.type, "product")]]',
      pageSize: config.params?.pageSize ?? 12,
      lang: config.params?.lang ?? defaultLanguage,
    },
  });
  return response.data;
};

export const getProduct = async (id, config = {}) => {
  const response = await api.get("documents/search", {
    ...config,
    params: {
      ...config.params,
      q: `[[:d+=+at(document.id,+"${id}")+]]`,
    },
    paramsSerializer: { encode: (value) => value },
  });
  return response.data;
};

export const searchProductsRequest = async (query, config = {}) => {
  const response = await api.get("documents/search", {
    ...config,
    params: {
      ...config.params,
      q: [
        '[[at(document.type, "product")]]',
        `[[fulltext(document, "${query}")]]`,
      ],
      lang: config.lang ?? defaultLanguage,
      pageSize: config.pageSize ?? 20,
    },
  });
  return response.data;
};
