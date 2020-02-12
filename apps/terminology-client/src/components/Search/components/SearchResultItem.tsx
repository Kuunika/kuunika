import React from 'react';
import styled from 'styled-components';
import Btn from '../../Button';
import { theme } from '../../../config/theme';
import { ISearchCategory } from 'apps/terminology-client/src/services/utils/@types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchResultsState } from 'apps/terminology-client/src/services/redux/actions/ui';

function SearchResultItem({
  breadcrumbCategory,
  numberOfResults,
  sourceId,
  searchTerm
}: ISearchCategory) {
  const history = useHistory();

  const dispatch = useDispatch();

  const onClick = () => {
    const link = `/${breadcrumbCategory}/view/${sourceId}/${searchTerm}`;
    history.push(link);
    dispatch(setSearchResultsState(false));
  };
  return (
    <Wrapper>
      <Category>
        Category: <i>{breadcrumbCategory}</i>
        <p>{numberOfResults} records found</p>
      </Category>
      <Btn style={{ width: '8rem', height: '2.5rem' }} onClick={onClick}>
        {' '}
        View{' '}
      </Btn>
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
