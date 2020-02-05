import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import Table from './components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../../services/redux/actions/data';
import { State, CategoryData } from '../../services/utils/@types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

function Concepts(props) {
  const dispatch = useDispatch();
  const [breadClumb, setBreadClumb] = useState([]);
  const [search, setSearch] = useState('');
  const [formatedData, setFormatedData] = useState([]);

  const data = useSelector((state: State) => {
    return state.data.categoryData[props.match.params.id]
      ? state.data.categoryData[props.match.params.id]
      : state.data.categoryData['default'];
  });

  useEffect(() => {
    const dt = data.results.filter(t => {
      return JSON.stringify(t)
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFormatedData(search.length == 0 ? data.results : dt);
  }, [search, data]);

  useEffect(() => {
    if (props.match.params.id && data.results.length == 0)
      dispatch(getCategoryData(props.match.params.id));
  }, [props.match.params]);

  useEffect(() => {
    let locationArray = props.match.params[0].split('/');
    setBreadClumb([...locationArray]);
  }, [props.match.params]);

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <ConceptsView
      data={{ ...data, formatedData } as CategoryData}
      breadCrumb={breadClumb}
      onChangeSearch={onChangeSearch}
      filter={search}
    />
  );
}

export default Concepts;

export function ConceptsView({
  data,
  breadCrumb,
  onChangeSearch,
  filter
}: ViewProps) {
  return (
    <Wrapper>
      <TableTitleContainer>
        <CategoryBreadCrumb data={breadCrumb} />
        <InputGroup>
          <Input
            placeholder="Search"
            value={filter}
            onChange={e => onChangeSearch(e.target.value)}
          ></Input>
          <Addon>
            {filter.length > 0 ? (
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  onChangeSearch('');
                }}
              />
            ) : (
              <FontAwesomeIcon icon={faSearch} onClick={() => {}} />
            )}
          </Addon>
        </InputGroup>
      </TableTitleContainer>

      <Table headings={data.sourceHeadings} data={data.formatedData} />
    </Wrapper>
  );
}

interface ViewProps {
  data: CategoryData;
  breadCrumb: Array<string>;
  onChangeSearch: Function;
  filter: string;
}
const Wrapper = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
`;

const TableTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  height: 2.5rem;
`;

const Input = styled.input`
  display: inline-block;
  background: white;
  border-width: 0px;
  height: 2.3rem;
  padding: 0.2rem;
  padding-left: 1.5rem;
  font-size: 1rem;
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
