import React from 'react';
import styled from 'styled-components';
import SearchResultItem from './SearchResultItem';
import { useSelector } from 'react-redux';
import {
  State,
  ISearchCategory,
  ISearch
} from 'apps/terminology-client/src/services/utils/@types';

function SearchResults(props: Props) {
  const searchResults = useSelector((state: State) => state.data.search);
  return (
    <>
      {props.open && searchResults.searchCategories.length > 0 && (
        <SearchResultsView data={searchResults} />
      )}
    </>
  );
}

export default SearchResults;

export function SearchResultsView({ data }: ViewProps) {
  return (
    <Wrapper>
      {data.searchCategories.map(result => (
        <SearchResultItem
          key={result.sourceId}
          {...result}
          searchTerm={data.searchTerm}
        />
      ))}
    </Wrapper>
  );
}

interface Props {
  open: boolean;
}

interface ViewProps {
  data: ISearch;
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
