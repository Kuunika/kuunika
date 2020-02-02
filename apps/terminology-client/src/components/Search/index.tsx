import React, {
  useState,
  MouseEvent,
  MouseEventHandler,
  FocusEventHandler
} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import SearchResults from './components/SearchResults';

function Search() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const handleClickAway = () => setOpen(false);
  const onFocus = () => setOpen(true);

  return (
    <SearchView
      searchOpen={open}
      handleClickAway={handleClickAway}
      onFocus={onFocus}
      search={search}
      onChange={setSearch}
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
            value={props.search}
          ></Input>
          <Addon>
            {props.searchOpen && props.search.length > 0 ? (
              <FontAwesomeIcon
                icon={faTimes}
                onClick={props.handleClickAway as MouseEventHandler<any>}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSearch}
                onClick={props.onFocus as MouseEventHandler<any>}
              />
            )}
          </Addon>
        </InputGroup>

        <SearchResults open={props.searchOpen && props.search.length > 0} />
      </Wrapper>
    </ClickAwayListener>
  );
}

interface ViewProps {
  searchOpen: boolean;
  handleClickAway: (event: MouseEvent<Document>) => void;
  onFocus: Function;
  search: string;
  onChange: Function;
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
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
