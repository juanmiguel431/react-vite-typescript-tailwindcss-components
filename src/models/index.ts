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
  name: string;
  render: (item: T) => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  sort?: (item: T) => string | number;
}

export type TableProps<T> = {
  columns: TableColumn<T>[];
  dataSource: T[];
  keyExtractor: (item: T) => React.Key;
}

export type SortOrder = 'ASC' | 'DESC' | null;
