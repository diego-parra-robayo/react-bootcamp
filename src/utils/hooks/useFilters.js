import { useCallback, useState } from "react";

/**
 *
 * @param data: [{ id: string }]
 * @returns {{filters: [{id: string, selected: boolean}], toggleFilter: ((function(id: string): void)), selectedFilters: [{id: string, selected: true}]}}
 */
function useFilters(data) {
  const [filters, setFilters] = useState(data);
  const toggleFilter = useCallback(
    (id) => {
      setFilters(
        filters.map((filter) => {
          if (filter.id === id)
            return { ...filter, selected: !filter.selected };
          return filter;
        })
      );
    },
    [filters, setFilters]
  );

  return {
    filters,
    toggleFilter,
    selectedFilters: filters.filter((filter) => filter.selected),
  };
}

export default useFilters;
