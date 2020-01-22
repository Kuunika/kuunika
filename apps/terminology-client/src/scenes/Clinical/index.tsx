import React from 'react';
import BaseCategory from '../BaseCategory';
import { PageContainer } from '../../components/PageContainer';

function Clinical(props: any) {
  const onClick = (url: string) => {
    props.history.push(url);
  };
  const data = [
    {
      title: 'Terms',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias aliquam corrupti perferendis',
      onClick: () => onClick('clinical/terms')
    },
    {
      title: 'Ab',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias aliquam corrupti perferendis',
      onClick: () => onClick('clinical/terms')
    },
    {
      title: 'Te',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias aliquam corrupti perferendis',
      onClick: () => onClick('clinical/terms')
    },
    {
      title: 'okay',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias aliquam corrupti perferendis',
      onClick: () => onClick('clinical/terms')
    },
    {
      title: 'rt',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias aliquam corrupti perferendis',
      onClick: () => onClick('clinical/terms')
    },
    {
      title: 'great',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias aliquam corrupti perferendis',
      onClick: () => onClick('clinical/terms')
    }
  ] as Array<{ title: string; content: any; onClick: Function }>;

  return <ClinicalView data={data} />;
}

export default Clinical;

export function ClinicalView({ data }: Props) {
  return (
    <PageContainer>
      <BaseCategory data={data} />
    </PageContainer>
  );
}

interface Props {
  data: Array<{
    title: string;
    content: any;
    onClick: Function;
  }>;
}
