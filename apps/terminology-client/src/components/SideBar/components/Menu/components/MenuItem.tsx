import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { State } from '../../../../../services/utils/@types';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../../../../services/redux/actions/ui';

function MenuItem({ item }: Props) {
  const activePage = useSelector((state: State) => state.ui.activePage);
  const dispatch = useDispatch();
  const onClick = useCallback(
    item => {
      dispatch(setActivePage(item.name));
    },
    [dispatch]
  );
  const isActive = () => item.name === activePage;

  return <MenuItemView item={item} onClick={onClick} active={isActive()} />;
}

export default MenuItem;

export const MenuItemView = ({ item, active, onClick }: Props) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={item.link ? item.link : '/'}
      onClick={() => {
        if (onClick) {
          onClick(item);
        }
      }}
      data-test={`menu${item.name}`}
    >
      <Wrapper active={active}>
        {/* <Icon>{item.icon}</Icon> */}
        {item.displayName}
      </Wrapper>
    </Link>
  );
};

interface Props {
  item: {
    name: string;
    displayName: string;
    link: string;
  };
  active?: boolean;
  onClick?: any;
}

const Wrapper = styled('div')<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 0px;
  background: ${props => (props.active ? 'white' : 'transparent')};
  border-radius: 50px;
  box-shadow: ${props =>
    props.active
      ? '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
      : ''};
  font-weight: bold;
  color: ${props => (props.active ? '#333333' : '#595959')};
`;

const Icon = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 25px;
`;
