import React from 'react';
import { BsArrowUpSquare, BsArrowDownSquare, BsArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';
import { SortOrder, TableProps } from '../models';
import useSort from '../hooks/useSort.ts';

const getIcons = (column: string | null, currentColumn: string | null, sortOrder: SortOrder) => {
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
};

const Table = <T, >({ keyExtractor, columns, dataSource }: TableProps<T>) => {
  const { sortColumn, sortOrder, handleSort, data } = useSort(dataSource, columns);

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
                onClick={() => handleSort(c.name)}
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
