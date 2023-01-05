import api from "./api";
import { defaultLanguage } from "../utils/constants";

export const getFeaturedBanners = async (config = {}) => {
  const response = await api.get("/documents/search", {
    ...config,
    params: {
      ...config.params,
      q: '[[at(document.type, "banner")]]',
      pageSize: config.params?.pageSize ?? 5,
      lang: config.params?.lang ?? defaultLanguage,
    },
  });
  return response.data;
};
