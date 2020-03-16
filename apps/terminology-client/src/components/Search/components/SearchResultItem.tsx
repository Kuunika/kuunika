import React from 'react';
import styled from 'styled-components';
import Btn from '../../Button';
import { theme } from '../../../config/theme';
import { ISearchCategory } from 'apps/terminology-client/src/services/utils/@types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchResultsState } from 'apps/terminology-client/src/services/redux/actions/ui';

function SearchResultItem({
  categoryBreadcrumb,
  numberOfResults,
  sourceId,
  searchTerm
}: ISearchCategory) {
  const history = useHistory();

  const dispatch = useDispatch();

  const onClick = () => {
    const link = `/${categoryBreadcrumb}/view/search/${sourceId}/${encodeURI(
      searchTerm
    )}`;
    history.push(link);
    dispatch(setSearchResultsState(false));
  };
  return (
    <Wrapper data-testid="search-result-item">
      <Category>
        Category: <i>{categoryBreadcrumb}</i>
        <Footer>
          <p>{numberOfResults} records found</p>
          <Btn
            style={{ width: '8rem', height: '2.5rem' }}
            onClick={onClick}
            data-testid="search-result-btn"
          >
            {' '}
            View{' '}
          </Btn>
        </Footer>
      </Category>
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;
`;

const Category = styled.div`
  text-align: left;
  width: 100%;
  margin: 0rem 1.5rem;
  font-size: 1.5rem;
  color: ${theme.darkColor};
  font-weight: 550;
  p {
    font-size: 1.2rem;
    color: gray;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
    margin-right: 1rem;
    p {
      font-size: 0.8rem;
    }
  }
`;
