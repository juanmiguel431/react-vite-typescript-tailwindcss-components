import { useCallback, useState } from 'react';
import { SortOrder } from '../models';

const useSort = () => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const sort = useCallback( (newColumn: string, currentColumn: string | null, currentOrder: string | null) => {
    if (currentColumn !== newColumn) {
      setSortColumn(newColumn);
      setSortOrder('ASC');
      return;
    }

    switch (currentOrder) {
      case 'ASC':
        setSortOrder('DESC');
        break;
      case 'DESC':
        setSortOrder(null);
        break;
      default:
        setSortOrder('ASC');
        break;
    }

  }, []);

  const handleSort = useCallback((column: string) => {
    sort(column, sortColumn, sortOrder);
  }, [sortColumn, sortOrder, sort]);

  return {
    sortColumn, sortOrder, handleSort
  }
}

export default useSort;
