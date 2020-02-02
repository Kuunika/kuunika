import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import CategoryCard from '../../components/CategoryCard';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import { PageHeading } from '../../components/PageHeading/PageHeading';
import { State, Category as ICategory } from '../../services/utils/@types';
import { useSelector, useDispatch } from 'react-redux';
import { getSubCategories } from '../../services/utils/helpers';
import { setActivePage } from '../../services/redux/actions/ui';

function Category(props) {
  const [pageTitle, setPageTitle] = useState('');
  const [breadClumb, setBreadClumb] = useState([]);

  const categories = useSelector((state: State) => state.data.categories);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const onClick = (category: ICategory) => {
    let link = category.id
      ? `${category.categoryTitle}/view/${category.id}`
      : category.categoryTitle;
    link =
      breadClumb.length > 0
        ? `/${breadClumb.join('/')}/${link.toLowerCase().replace(' ', '-')}`
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
    setBreadClumb([...locationArray]);
  }, [props.location.pathname]);

  useEffect(() => {
    setData(
      getSubCategories(categories, [...breadClumb]).map(dt => ({
        title: dt.categoryTitle,
        content: 'example content',
        onClick: () => onClick(dt)
      }))
    );
  }, [breadClumb, categories]);

  return (
    <>
      <PageHeading>{pageTitle}</PageHeading>
      {breadClumb.length > 0 && <CategoryBreadCrumb data={breadClumb} />}
      <Grid container spacing={4}>
        {data.map(({ title, content, onClick }) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={title}>
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
export default Category;
