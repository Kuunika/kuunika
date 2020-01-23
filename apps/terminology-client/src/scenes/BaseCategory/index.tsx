import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CategoryCard from '../../components/CategoryCard';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import { PageHeading } from '../../components/PageHeading/PageHeading';
import { State } from '../../services/utils/@types';
import { useSelector, useDispatch } from 'react-redux';
import { getSubCategories } from '../../services/utils/helpers';
import { setActivePage } from '../../services/redux/actions/ui';
import lodash from 'lodash';

function Category(props) {
  const [pageTitle, setPageTitle] = useState('');
  const [breadClumb, setBreadClumb] = useState([]);

  const categories = useSelector((state: State) => state.data.categories);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const onClick = (link: string) => {
    link =
      breadClumb.length > 0
        ? `/${breadClumb.join('/')}/${link.toLowerCase().replace(' ', '-')}`
        : `/${link.toLowerCase().replace(' ', '-')}`;

    props.history.push(link);
    dispatch(setActivePage(window.location.pathname.split('/')[1]));
  };

  useEffect(() => {
    const locationArray = window.location.pathname.split('/');
    const nextPageTitle =
      locationArray[1].length === 0
        ? 'All Categories'
        : locationArray[1].replace('-', ' ');

    if (pageTitle != nextPageTitle) setPageTitle(nextPageTitle);
  }, []);

  useEffect(() => {
    let locationArray = window.location.pathname.split('/');
    locationArray =
      locationArray[1].length === 0 ? [] : [...locationArray].slice(1);
    if (!lodash.isEqual(breadClumb, [...locationArray]))
      setBreadClumb([...locationArray]);
  }, []);

  useEffect(() => {
    setData(
      getSubCategories(categories, breadClumb).map(dt => ({
        title: dt.categoryTitle,
        content: 'example content',
        onClick: () => onClick(dt.categoryTitle)
      }))
    );
  }, [breadClumb, categories]);

  return (
    <>
      <PageHeading>{pageTitle}</PageHeading>
      {breadClumb.length > 0 && <CategoryBreadCrumb data={breadClumb} />}
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
export default Category;
