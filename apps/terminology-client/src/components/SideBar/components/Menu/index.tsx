import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import {
  faStethoscope,
  faFirstAid,
  faPills,
  faSyringe,
  faDatabase,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from 'apps/terminology-client/src/services/redux/actions/ui';
import { State } from 'apps/terminology-client/src/services/utils/@types';

function Menu() {
  const categories = useSelector((state: State) => state.data.categories);
  const dispatch = useDispatch();
  const activePage = window.location.pathname.split('/')[1];

  useEffect(() => {
    dispatch(setActivePage(activePage));
  });

  const MenuData = categories
    ? categories.map(category => ({
        name: category.categoryTitle.toLowerCase(),
        displayName: category.categoryTitle,
        link: `/${category.categoryTitle.replace(' ', '-').toLowerCase()}`
      }))
    : [];

  return <MenuView items={MenuData} />;
}

export default Menu;

export const MenuView = (props: IViewProps) => {
  return (
    <Wrapper>
      {props.items.map(item => (
        <MenuItem item={item} key={item.name} />
      ))}
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
}
const Wrapper = styled.div`
  margin-top: 25px;
`;
