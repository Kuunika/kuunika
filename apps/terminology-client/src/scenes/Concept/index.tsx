import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { getConcept } from '../../services/redux/actions/data';
import { State } from '../../services/utils/@types';
import Btn from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Heading from './components/Heading';
import Body from './components/Body';

function Concept(props) {
  const dispatch = useDispatch();
  const [breadClumb, setBreadClumb] = useState([]);

  const data = useSelector((state: State) => {
    return state.data.concept[
      `${props.match.params.id}${props.match.params.conceptId}`
    ]
      ? state.data.concept[
          `${props.match.params.id}${props.match.params.conceptId}`
        ]
      : state.data.concept['default'];
  });

  useEffect(() => {
    if (
      props.match.params.id &&
      props.match.params.conceptId &&
      data.id == null
    )
      dispatch(getConcept(props.match.params.id, props.match.params.conceptId));
  }, [props.match.params]);

  useEffect(() => {
    let locationArray = props.match.params[0].split('/');
    setBreadClumb([...locationArray]);
  }, [props.match.params]);

  return (
    <ConceptView data={data} breadCrumb={breadClumb} history={props.history} />
  );
}

export default Concept;

function ConceptView({ data, breadCrumb, history }) {
  return (
    <Wrapper>
      <Btn
        onClick={() => history.goBack()}
        theme="default"
        icon={<FontAwesomeIcon icon={faCaretLeft} />}
      >
        BACK
      </Btn>
      <BreadCrumb>
        <CategoryBreadCrumb data={breadCrumb} />
      </BreadCrumb>
      <Heading data={data.headings}></Heading>
      <Body data={data.descriptions} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
`;

const BreadCrumb = styled.div`
  text-align: center;
  width: 100%;
`;
