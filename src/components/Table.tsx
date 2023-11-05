import React from 'react';
import { TableProps } from '../models';

const Table = <T, >({ keyExtractor, columns, dataSource }: TableProps<T>) => {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
      <tr className="border-b-2">
        {columns.map(c => (
          <th className="p-3" key={c.title}>
            {c.renderHeader ? c.renderHeader() : c.title}
          </th>
        ))}
      </tr>
      </thead>
      <tbody>
      {dataSource.map(d => (
        <tr key={keyExtractor(d)} className="border-b">
          {columns.map(c => (
            <td className="p-3" key={c.title}>{c.render(d)}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
