import React from 'react';

export type Section = {
  id: React.Key;
  title: string;
  content: string;
};

export type Option = {
  value: string;
  label: string;
};

export type TableColumn<T> = {
  title: string;
  render: (item: T) => React.ReactNode;
  renderHeader?: () => React.ReactNode;
}

export type TableProps<T> = {
  columns: TableColumn<T>[];
  dataSource: T[];
  keyExtractor: (item: T) => React.Key;
}
