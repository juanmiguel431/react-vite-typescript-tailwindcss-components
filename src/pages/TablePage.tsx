import React, { useMemo } from 'react';
import Table from '../components/Table.tsx';
import { TableColumn } from '../models';

type TablePageProps = {}

type Data = {
  name: string;
  color: string;
  score: number;
}

const data: Data[] = [
  { name: 'Orange', color: 'bg-orange-500', score: 5 },
  { name: 'Apple', color: 'bg-red-500', score: 3 },
  { name: 'Banana', color: 'bg-yellow-500', score: 1 },
  { name: 'Lime', color: 'bg-green-500', score: 4 },
  { name: 'Cherry', color: 'bg-red-700', score: 4 },
]

const TablePage: React.FC<TablePageProps> = () => {

  const columns = useMemo((): TableColumn<Data>[] => {
    return [
      {
        name: 'Name',
        render: (item) => item.name,
        sort: (item) => item.name,
      },
      {
        name: 'Color',
        render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>
      },
      {
        name: 'Score',
        render: (item) => item.score,
        sort: (item) => item.score,
      },
      {
        name: 'Squared Score',
        render: (item) => item.score ** 2,
      }
    ];
  }, []);

  return (
    <div>
      <Table
        keyExtractor={item => item.name}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TablePage;

