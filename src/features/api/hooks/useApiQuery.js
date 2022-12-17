import { useEffect, useState } from "react";

export function useApiQuery(query, { params = {} } = {}) {
  const [dataWrapper, setDataWrapper] = useState({
    isLoading: true,
    data: {},
    error: null,
  });
  useEffect(() => {
    const controller = new AbortController();
    async function getDataAsync() {
      try {
        setDataWrapper({ isLoading: true, data: {}, error: null });
        const config = { signal: controller.signal };
        const data = await query({ params, config });
        setDataWrapper({ isLoading: false, data, error: null });
      } catch (err) {
        setDataWrapper({ isLoading: false, data: {}, error: err });
        console.error(err);
      }
    }
    getDataAsync();

    return () => {
      controller.abort();
    };
  }, []);
  return dataWrapper;
}

/*
    Note:
      *Basic case to load data with a hook, very similar to useFeaturedBanners but in this case the query is
      abstracted and passed as parameter.
      *Used axios in the query so that some params can be configured, for example ref or if it was the case, with
      axios an auth header may have been passed.

      *Basically, it is similar to createApi from RTK, where loading and error states can be added.
      This hook can be used directly in React components to fetch data and its state. However, it
      can't be used in a redux-thunk as it is a hook.

      Example:
      In React component:
          const { data: banners, isLoading } = useApiQuery(getFeaturedBanners);
          console.log("banners", banners, "isLoading", isLoading);
 */
