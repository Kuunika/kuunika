import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CategoryCard from '../../components/CategoryCard';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import { PageHeading } from '../../components/PageHeading/PageHeading';

function Category({ data }: Props) {
  const [pageTitle, setPageTitle] = useState('');
  const [breadClumb, setBreadClumb] = useState([]);

  useEffect(() => {
    const locationArray = window.location.pathname.split('/');
    const pageTitle =
      locationArray[1].length === 0 ? 'clinical' : locationArray[1];

    setPageTitle(pageTitle);
  });

  useEffect(() => {
    let locationArray = window.location.pathname.split('/');
    locationArray =
      locationArray[1].length === 0 ? ['', 'clinical'] : locationArray;
    setBreadClumb(locationArray.slice(1));
  }, [pageTitle]);

  return (
    <>
      <PageHeading>{pageTitle}</PageHeading>
      <CategoryBreadCrumb data={breadClumb} />
      <Grid container spacing={4}>
        {data.map(({ title, content, onClick }) => (
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <CategoryCard
              key={title}
              title={title}
              content={content}
              onClick={onClick}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

interface Props {
  data: Array<{
    title: string;
    content: any;
    onClick: any;
  }>;
}
export default Category;
