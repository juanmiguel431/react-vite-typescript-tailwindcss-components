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
