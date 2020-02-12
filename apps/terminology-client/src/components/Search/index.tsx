import React, {
  useState,
  MouseEvent,
  MouseEventHandler,
  FocusEventHandler,
  useEffect,
  KeyboardEventHandler,
  useRef
} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import SearchResults from './components/SearchResults';
import {
  searchConcept,
  setSearchValue
} from '../../services/redux/actions/data';
import { setSearchResultsState } from '../../services/redux/actions/ui';
import { debounce } from 'lodash';
import { State } from '../../services/utils/@types';

function Search() {
  const open = useSelector((state: State) => state.ui.searchResults);

  const searchValue = useSelector(
    (state: State) => state.data.search.searchTerm
  );

  const dispatch = useDispatch();

  const handleClickAway = () => dispatch(setSearchResultsState(false));
  const onFocus = () => dispatch(setSearchResultsState(true));

  const onChange = (value = '') => {
    dispatch(setSearchValue(value));
    search(value);
  };
  const search = useRef(
    debounce(value => {
      dispatch(searchConcept(value));
    }, 800)
  ).current;

  return (
    <SearchView
      searchOpen={open}
      handleClickAway={handleClickAway}
      onFocus={onFocus}
      searchValue={searchValue}
      onChange={onChange}
    />
  );
}

export default Search;

export function SearchView(props: ViewProps) {
  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <Wrapper>
        <InputGroup>
          <Input
            placeholder="Search"
            onFocus={props.onFocus as FocusEventHandler<any>}
            onChange={e => props.onChange(e.target.value)}
            value={props.searchValue}
          ></Input>
          <Addon>
            {props.searchOpen && props.searchValue.length > 0 ? (
              <FontAwesomeIcon
                icon={faTimes}
                onClick={e => {
                  props.onChange(), props.handleClickAway(e as MouseEvent<any>);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSearch}
                onClick={props.onFocus as MouseEventHandler<any>}
              />
            )}
          </Addon>
        </InputGroup>

        <SearchResults open={props.searchOpen} />
      </Wrapper>
    </ClickAwayListener>
  );
}

interface ViewProps {
  searchOpen: boolean;
  handleClickAway: (event: MouseEvent<Document>) => void;
  onFocus: Function;
  searchValue: string;
  onChange: Function;
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  width: 35%;
  border-radius: 1.5rem;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  background: white;
`;

const Input = styled.input`
  display: inline-block;
  background: white;
  border-width: 0px;
  height: 2.3rem;
  padding: 0.2rem;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  width: 82.5%;
  border-radius: 1.5rem 0rem 0rem 1.5rem;
`;

const Addon = styled.div`
  display: inline-block;
  background: white;
  height: 2.3rem;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  padding-right: 1.5rem;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  color: gray;
  cursor: pointer;
`;
