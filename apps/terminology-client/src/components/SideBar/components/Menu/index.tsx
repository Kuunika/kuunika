import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from 'apps/terminology-client/src/services/redux/actions/ui';
import { State } from 'apps/terminology-client/src/services/utils/@types';
import ContentLoader from 'react-content-loader';

function Menu() {
  const categories = useSelector((state: State) => state.data.categories);
  const loading = useSelector((state: State) => state.loading.getCategories);
  const dispatch = useDispatch();
  const activePage = window.location.pathname.split('/')[1];

  useEffect(() => {
    dispatch(setActivePage(activePage));
  });

  const MenuData = categories
    ? categories.map(category => ({
        name: category.categoryTitle.toLowerCase().replace(' ', ''),
        displayName: category.categoryTitle,
        link: `/${category.categoryTitle.replace(' ', '-').toLowerCase()}`
      }))
    : [];

  return <MenuView items={MenuData} loading={loading} />;
}

export default Menu;

export const MenuLoading = () => (
  <ContentLoader viewBox={`0 0 200 ${80 * 7}`}>
    {[...Array(7).keys()].map(value => (
      <rect
        key={value}
        x="0"
        y={value * 40}
        rx="5"
        ry="5"
        width="130"
        height="20"
      />
    ))}
  </ContentLoader>
);

export const MenuView = (props: IViewProps) => {
  return (
    <Wrapper data-testid="menu-container">
      {props.loading || props.items.length == 0 ? (
        <MenuLoading />
      ) : (
        props.items.map(item => <MenuItem item={item} key={item.name} />)
      )}
    </Wrapper>
  );
};

interface Props {}

interface IMenuItem {
  name: string;
  displayName: string;
  link: string;
}
interface IViewProps {
  items: Array<IMenuItem>;
  loading: boolean;
}
const Wrapper = styled.div`
  margin-top: 25px;
`;
