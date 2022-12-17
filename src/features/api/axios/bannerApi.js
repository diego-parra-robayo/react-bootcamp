import api from "./api";

export const getFeaturedBanners = async ({ config = {} } = {}) => {
  return await api.get(
    `/documents/search?q=${encodeURIComponent(
      '[[at(document.type, "banner")]]'
    )}&lang=en-us&pageSize=5`,
    config
  );
};

/*
  Notes:
    This file can be used to define all banner related endpoints and access them from
    custom hooks (to load state in component) or thunks (to update state in reducer).
    This option may give a little more control than create api from RTK, as thunks can have custom logic,
    as we have the raw query rather than a hook, but it requires more configuration because loading and error states
    must be set manually into the thunk-reducer.

    An example where that control may be beneficial is with dependent states between reducers:
      Showing selected categories requires taking data from all categories slice and filtered categories
      in products slice. With axios queries and thunks data in slices is controlled, and it is reliable.
      *RTK query does not control state in slices, but one can use selectors based on api queries.


    Example using in hook:  See file useApiQuery.

    Example using with thunk-reducer:
      //  In bannersSlice.js
      export const loadBanners = () => async (dispatch) => {
        dispatch(setLoadingState());
        try {
          const banners = await getFeaturedBanners();
          dispatch(setBanners(banners.data.results));
        } catch (err) {
          dispatch(setError(err));
        }
      };

      //  In bannersSlice.js
      export const selectBannersResult = (state) => state.banners;


      and then, to load data:
        const dispatch = useDispatch();
        const { data: banners, isLoading } = useSelector(selectBannersResult);
        useEffect(() => {
          dispatch(loadBanners());
        }, []);
        console.log("banners", banners, "isLoading", isLoading);
 */
