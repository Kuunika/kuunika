import React, { useCallback, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../services/redux/actions/ui';
import { theme } from '../../config/theme';
import { Link } from 'react-router-dom';

function index() {
  const dispatch = useDispatch();
  const onClick = useCallback(
    item => {
      dispatch(setActivePage(''));
    },
    [dispatch]
  );
  return <SideBarView data-testid="side-bar" onLogoClick={onClick} />;
}

export default index;

function SideBarView({ onLogoClick }: { onLogoClick: Function }) {
  return (
    <Wrapper>
      <Link onClick={onLogoClick as MouseEventHandler<any>} to="/">
        <Logo src="../../assets/favicon.ico" />
      </Link>
      <SiteName>Malawi Terminology Dashboard</SiteName>
    </Wrapper>
  );
}

const Logo = styled.img`
  width: 120px;
  @media screen and (max-width: 960px) {
    width: 60px;
    display: inline-block;
  }
`;

const SiteName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #231150;
  margin: 10px 0px;
  @media screen and (max-width: 960px) {
    font-size: 30px;
    display: inline-block;
    color: white;
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
  @media screen and (max-width: 460px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    background: ${theme.color};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    z-index: 99;
    color: white;
  }
`;
