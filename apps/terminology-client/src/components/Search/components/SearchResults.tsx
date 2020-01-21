import React from 'react';
import styled from 'styled-components';
import SearchResultItem from './SearchResultItem';

function SearchResults(props: Props) {
  return <>{props.open && <SearchResultsView />}</>;
}

export default SearchResults;

export function SearchResultsView() {
  return (
    <Wrapper>
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
    </Wrapper>
  );
}

interface Props {
  open: boolean;
}

const Wrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 110%;
  text-align: center;
  border-radius: 10px;
  z-index: 99;
  background: #f4f4f4;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;
