import { useCallback, useState } from 'react';
import { SortOrder, TableColumn } from '../models';

const useSort = <T,>(dataSource: T[], columns: TableColumn<T>[]) => {
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

  let data: T[];

  if (sortColumn) {
    const sortFc = columns.find(p => p.name === sortColumn)?.sort;
    if (!sortFc) {
      data = dataSource;
    } else {
      const invertedOrder = sortOrder === 'DESC' ? -1 : 1;
      data = [...dataSource].sort((a, b) => {
        const valueA = sortFc(a);
        const valueB = sortFc(b);

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB as string) * invertedOrder;
        }

        return (valueA - (valueB as number)) * invertedOrder;
      });
    }
  } else {
    data = dataSource;
  }

  return {
    sortColumn, sortOrder, handleSort, data
  }
}

export default useSort;
