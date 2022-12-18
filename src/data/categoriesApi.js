import api from "./api";

export const getProductCategories = async ({ config = {} } = {}) => {
  const response = await api.get(
    `/documents/search?q=${encodeURIComponent(
      '[[at(document.type, "category")]]'
    )}&lang=en-us&pageSize=30`,
    config
  );
  return response.data;
};
