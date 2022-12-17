import { apiSlice } from "./apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedBanners: builder.query({
      query: () =>
        `/documents/search?q=${encodeURIComponent(
          '[[at(document.type, "banner")]]'
        )}&lang=en-us&pageSize=5`,
    }),
  }),
});

//  Note: useGetFeaturedBannersQuery must be called previously. Select will not trigger the query but only display
//        the information saved by the query.
export const selectBannersResult =
  extendedApiSlice.endpoints.getFeaturedBanners.select();

export const { useGetFeaturedBannersQuery } = extendedApiSlice;
