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
