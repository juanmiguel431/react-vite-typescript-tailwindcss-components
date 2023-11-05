import React, { useCallback, useState } from 'react';
import { BsArrowUpSquare, BsArrowDownSquare, BsArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';
import { SortOrder, TableProps } from '../models';

const Table = <T, >({ keyExtractor, columns, dataSource }: TableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const handleSort = useCallback( (newColumn: string, currentColumn: string | null, currentOrder: string | null) => {
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

  const getIcons = useCallback((column: string | null, currentColumn: string | null, sortOrder: SortOrder) => {
    if (sortOrder === null || column !== currentColumn) {
      return (
        <div>
          <BsArrowUpSquare />
          <BsArrowDownSquare />
        </div>
      );
    }

    if (sortOrder === 'ASC') {
      return (
        <div>
          <BsArrowUpSquareFill />
          <BsArrowDownSquare />
        </div>
      );
    }

    if (sortOrder === 'DESC') {
      return (
        <div>
          <BsArrowUpSquare />
          <BsArrowDownSquareFill />
        </div>
      );
    }

  }, []);

  return (
    <table className="table-auto border-spacing-2">
      <thead>
      <tr className="border-b-2">
        {columns.map(c => {
          const content = c.renderHeader ? c.renderHeader() : c.name;

          if (c.sort) {
            return (
              <th
                className="p-3 cursor-pointer"
                key={c.name}
                onClick={() => handleSort(c.name, sortColumn, sortOrder)}
              >
                <div className="flex items-center">
                  {getIcons(c.name, sortColumn, sortOrder)}
                  {content}
                </div>
              </th>
            );
          }

          return (
            <th className="p-3" key={c.name}>{content}</th>
          );
        })}
      </tr>
      </thead>
      <tbody>
      {data.map(d => (
        <tr key={keyExtractor(d)} className="border-b">
          {columns.map(c => (
            <td className="p-3" key={c.name}>{c.render(d)}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
