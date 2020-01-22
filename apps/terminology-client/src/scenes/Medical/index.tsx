import React from 'react';
import BaseCategory from '../BaseCategory';

function Medical() {
  const data = [];
  return <MedicalView data={data} />;
}

export default Medical;

export function MedicalView({ data }: Props) {
  return <BaseCategory data={data} />;
}

interface Props {
  data: Array<{
    title: string;
    content: any;
    onClick: Function;
  }>;
}
