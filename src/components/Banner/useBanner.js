import { useCallback, useEffect, useState } from "react";

export function useBanner({ dataList = [], intervalMs = 4000 }) {
  const [pos, setPos] = useState(0);
  const setNext = useCallback(
    () =>
      setPos((pos) => {
        const isLast = pos >= dataList.length - 1;
        return isLast ? 0 : pos + 1;
      }),
    [setPos, dataList.length]
  );
  const setPrevious = useCallback(
    () =>
      setPos((pos) => {
        const isFirst = pos === 0;
        return isFirst ? dataList.length - 1 : pos - 1;
      }),
    [setPos, dataList.length]
  );

  useEffect(() => {
    if (!dataList) return () => {};
    let interval = setInterval(setNext, intervalMs);
    return () => {
      clearInterval(interval);
    };
  }, [dataList, intervalMs, pos, setNext]);

  return {
    pos,
    data: dataList[pos],
    setNext,
    setPrevious,
  };
}
