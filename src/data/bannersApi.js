import api from "./api";

export const getFeaturedBanners = async ({ config = {} } = {}) => {
  const response = await api.get(
    `/documents/search?q=${encodeURIComponent(
      '[[at(document.type, "banner")]]'
    )}&lang=en-us&pageSize=5`,
    config
  );
  return response.data;
};
