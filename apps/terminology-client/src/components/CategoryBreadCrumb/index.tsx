import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';

function CategoryBreadCrumb({ data }: Props) {
  const getLink = index => {
    if (index == 0) {
      return `/${data[index].toLowerCase().replace(/ /gi, '-')}`;
    }
    return `${getLink(index - 1)}/${data[index]
      .toLowerCase()
      .replace(/ /gi, '-')}`;
  };

  return (
    <Wrapper data-testid="breadcrumb">
      <Hidden smDown>
        <b>Category: </b>
      </Hidden>
      {data.map((text, index) => {
        text = text.replace(/-/gi, ' ');
        return index < data.length - 1 ? (
          <span key={text}>
            <Link to={getLink(index)}>
              <Location>{text}</Location>
            </Link>
            <Separator />
          </span>
        ) : (
          <span key={text}>
            <Location>{text}</Location>
          </span>
        );
      })}
    </Wrapper>
  );
}

export default CategoryBreadCrumb;

interface Props {
  data: Array<string>;
}

const Wrapper = styled.h2`
  color: ${theme.darkColor};
  font-size: 1.8rem;
  font-weight: 550;
  display: inline-block;
  @media (max-width: 460px) {
    font-size: 1.3rem;
  }
`;
const Location = styled.i`
  cursor: pointer;
  text-transform: capitalize;
`;
const Separator = styled.i`
  ::before {
    content: '/';
  }
  font-size: 2rem;
  margin: 0rem 0.2rem;
  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;
