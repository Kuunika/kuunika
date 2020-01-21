import React from 'react';
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

const MenuData = [
  {
    name: 'clinical',
    displayName: 'Clinical',
    icon: <FontAwesomeIcon icon={faStethoscope} />,
    link: '/'
  },
  {
    name: 'medical',
    displayName: 'Medical',
    icon: <FontAwesomeIcon icon={faFirstAid} />,
    link: '/medical'
  },
  {
    name: 'pharmaceutical',
    displayName: 'Pharmaceutical',
    icon: <FontAwesomeIcon icon={faPills} />,
    link: '/pharmaceutical'
  },
  {
    name: 'laboratory',
    displayName: 'Laboratory',
    icon: <FontAwesomeIcon icon={faSyringe} />,
    link: '/laboratory'
  },
  {
    name: 'digital',
    displayName: 'Digital Health',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    link: '/digital-health'
  },
  {
    name: 'public',
    displayName: 'Public Health',
    icon: <FontAwesomeIcon icon={faUserShield} />,
    link: '/public-health'
  }
] as Array<IMenuItem>;

function Menu() {
  return <MenuView items={MenuData} />;
}

export default Menu;

export const MenuView = (props: IViewProps) => {
  return (
    <Wrapper>
      {props.items.map(item => (
        <MenuItem item={item} />
      ))}
    </Wrapper>
  );
};

interface Props {}

interface IMenuItem {
  name: string;
  displayName: string;
  icon: JSX.Element;
  link: string;
}
interface IViewProps {
  items: Array<IMenuItem>;
}
const Wrapper = styled.div`
  margin-top: 25px;
`;
