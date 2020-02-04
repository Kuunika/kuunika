import React from 'react';
import styled from 'styled-components';
import Btn from '../../Button';
import { theme } from '../../../config/theme';

function SearchResultItem() {
  return (
    <Wrapper>
      <Category>
        Category: <i>Clinical/Terms/ICD10</i>
        <p>14 records found</p>
      </Category>
      <Btn style={{ width: '8rem', height: '2.5rem' }}> View </Btn>
    </Wrapper>
  );
}

export default SearchResultItem;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
  margin: 1rem;
`;

const Category = styled.div`
  text-align: left;
  margin: 0rem 1.5rem;
  margin-right: 3rem;
  font-size: 1.5rem;
  color: ${theme.darkColor};
  font-weight: 550;
  p {
    font-size: 1.2rem;
    color: gray;
  }
`;
