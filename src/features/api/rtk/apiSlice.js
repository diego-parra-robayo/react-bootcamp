import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReAuth from "./customBaseQuery";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

/*
    Notes:
      This is the redux standard way to handle data.
      - baseQuery can be customized as in axios, adding interceptors and headers.
      - Endpoints can be split into different files. See bannersSlice.
        Each endpoint creates a hook use___(Query|Mutation) and
        can create a selector with apiSlice.endpoints.___.select().

      One of RTK main advantages is that it also allows to handle cache.


      Example:
        use generated hook directly in a React component:
            const { data: banners, isLoading } = useGetFeaturedBannersQuery();
            console.log("banners", banners, "isLoading", isLoading);

        use selector. In this case the hook must be called previously, otherwise, data in selector will be undefined:
            useGetFeaturedBannersQuery();
            const { data: banners, isLoading } = useSelector(selectBannersResult);
            console.log("banners", banners, "isLoading", isLoading);

 */
