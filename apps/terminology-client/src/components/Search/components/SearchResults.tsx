import React from 'react';
import styled from 'styled-components';
import SearchResultItem from './SearchResultItem';
import { useSelector } from 'react-redux';
import {
  State,
  ISearchCategory,
  ISearch
} from 'apps/terminology-client/src/services/utils/@types';
import { LinearProgress } from '@material-ui/core';

function SearchResults(props: Props) {
  const searchResults: ISearch = useSelector(
    (state: State) => state.data.search
  );

  const loading = useSelector((state: State) => state.loading.searchConcept);
  const error = useSelector((state: State) => state.errors.searchConcept || []);
  return (
    <>
      {props.open && searchResults.searchTerm.length > 0 && (
        <SearchResultsView
          data={searchResults}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
}

export default SearchResults;

export function SearchResultsView({ data, loading, error }: ViewProps) {
  return (
    <Wrapper>
      {loading && (
        <div>
          <LinearProgress />
        </div>
      )}
      {data.searchCategories.length == 0 && !loading && (
        <div>No results for search</div>
      )}
      {error.length > 0 && <div>{error[0]}</div>}
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
  loading: boolean;
  error: Array<string>;
}

const Wrapper = styled.div`
  padding: 1rem;
  min-width: 40rem;
  position: absolute;
  top: 110%;
  text-align: center;
  border-radius: 10px;
  z-index: 99;
  background: #f4f4f4;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;
