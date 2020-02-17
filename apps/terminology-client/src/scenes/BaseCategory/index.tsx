import React, { useState, useEffect, useCallback } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import CategoryCard from '../../components/CategoryCard';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import { PageHeading } from '../../components/PageHeading/PageHeading';
import { State, Category as ICategory } from '../../services/utils/@types';
import { useSelector, useDispatch } from 'react-redux';
import { getSubCategories } from '../../services/utils/helpers';
import { setActivePage } from '../../services/redux/actions/ui';
import styled from 'styled-components';

function Category(props) {
  const [pageTitle, setPageTitle] = useState('');
  const [breadCrumb, setbreadCrumb] = useState([]);

  const categories = useSelector((state: State) => state.data.categories);

  const loading = useSelector((state: State) => state.loading.getCategories);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const onClick = (category: ICategory) => {
    let link = category.id
      ? `${category.categoryTitle}/view/${category.id}`
      : category.categoryTitle;
    link =
      breadCrumb.length > 0
        ? `/${breadCrumb.join('/')}/${link.toLowerCase().replace(' ', '-')}`
        : `/${link.toLowerCase().replace(' ', '-')}`;

    props.history.push(link);

    dispatch(setActivePage(link.split('/')[1]));
  };

  useEffect(() => {
    const locationArray = props.location.pathname.split('/');
    const nextPageTitle =
      locationArray[1].length === 0
        ? 'All Categories'
        : locationArray[1].replace('-', ' ');

    setPageTitle(nextPageTitle);
  }, [props.location.pathname]);

  useEffect(() => {
    let locationArray = props.location.pathname.split('/');
    locationArray =
      locationArray[1].length === 0 ? [] : [...locationArray].slice(1);
    setbreadCrumb([...locationArray]);
  }, [props.location.pathname]);

  useEffect(() => {
    setData(
      getSubCategories(categories, [...breadCrumb]).map((dt: ICategory) => ({
        title: dt.categoryTitle,
        content: dt.description,
        icons: dt.icons,
        onClick: () => onClick(dt)
      }))
    );
  }, [breadCrumb, categories]);

  return (
    <CategoryView
      pageTitle={pageTitle}
      data={data}
      breadCrumb={breadCrumb}
      loading={loading}
    />
  );
}
export default Category;

export const LoadingCategories = () => (
  <LoaderContainer>
    <CircularProgress />
  </LoaderContainer>
);

export const CategoryView = ({
  pageTitle,
  breadCrumb,
  data,
  loading
}: ViewProps) => (
  <>
    <PageHeading data-testid="page-title">{pageTitle}</PageHeading>
    {breadCrumb.length > 0 && <CategoryBreadCrumb data={breadCrumb} />}
    {loading ? (
      <LoadingCategories />
    ) : (
      <Grid container spacing={4}>
        {data.map(({ title, content, onClick, icons }) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={title}>
            <CategoryCard
              key={title}
              title={title}
              content={content}
              icons={icons}
              onClick={onClick}
            />
          </Grid>
        ))}
      </Grid>
    )}
  </>
);

interface ViewProps {
  pageTitle: string;
  breadCrumb: Array<string>;
  data: Array<{
    title: string;
    content: string;
    onClick: Function;
    icons: Array<string>;
  }>;
  loading: boolean;
}

const LoaderContainer = styled.div`
  display: flex;
  min-height: 20rem;
  align-items: center;
  justify-content: center;
`;
