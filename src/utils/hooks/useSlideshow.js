import { useCallback, useEffect, useState } from "react";

export function useSlideshow({
  dataList = [],
  intervalMs = 4000,
  isInfinite = true,
}) {
  const [pos, setPos] = useState(0);
  const setNext = useCallback(
    () =>
      setPos((pos) => {
        const isLast = pos >= dataList.length - 1;
        if (isLast) {
          return isInfinite ? 0 : dataList.length - 1;
        } else {
          return pos + 1;
        }
      }),
    [setPos, dataList.length, isInfinite]
  );
  const setPrevious = useCallback(
    () =>
      setPos((pos) => {
        const isFirst = pos === 0;
        if (isFirst) {
          return isInfinite ? dataList.length - 1 : 0;
        } else {
          return pos - 1;
        }
      }),
    [setPos, dataList.length, isInfinite]
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
    isFirst: pos === 0,
    isLast: pos === dataList.length - 1,
    setNext,
    setPrevious,
  };
}
