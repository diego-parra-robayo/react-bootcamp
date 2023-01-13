import api from "./api";
import { defaultLanguage } from "../utils/constants";

export const getProductCategories = async (config = {}) => {
  const response = await api.get("documents/search", {
    ...config,
    params: {
      ...config.params,
      q: '[[at(document.type, "category")]]',
      pageSize: config.params?.pageSize ?? 30,
      lang: config.params?.lang ?? defaultLanguage,
    },
  });
  return response.data;
};
