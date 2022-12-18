import api from "./api";

export const getFeaturedProducts = async ({ config = {} } = {}) => {
  const response = await api.get(
    `/documents/search?q=${encodeURIComponent(
      '[[at(document.type, "product")]]'
    )}&q=${encodeURIComponent(
      '[[at(document.tags, ["Featured"])]]'
    )}&lang=en-us&pageSize=16`,
    config
  );
  return response.data;
};
