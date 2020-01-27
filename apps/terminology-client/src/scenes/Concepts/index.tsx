import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import Table from './components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../../services/redux/actions/data';
import { State } from '../../services/utils/@types';

function Concepts(props) {
  const dispatch = useDispatch();
  const [breadClumb, setBreadClumb] = useState([]);

  const data = useSelector((state: State) => {
    return state.data.categoryData[props.match.params.id]
      ? state.data.categoryData[props.match.params.id]
      : state.data.categoryData['default'];
  });
  useEffect(() => {
    if (props.match.params.id) dispatch(getCategoryData(props.match.params.id));
  }, [props.match.params]);
  useEffect(() => {
    let locationArray = props.match.params[0].split('/');
    setBreadClumb([...locationArray]);
  }, [props.match.params]);
  return <ConceptsView data={data} breadCrumb={breadClumb} />;
}

export default Concepts;

function ConceptsView({ data, breadCrumb }) {
  return (
    <Wrapper>
      <CategoryBreadCrumb data={breadCrumb} />
      <Table headings={data.sourceHeadings} data={data.results} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
`;
