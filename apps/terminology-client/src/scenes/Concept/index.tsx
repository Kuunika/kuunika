import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryBreadCrumb from '../../components/CategoryBreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { getConcept } from '../../services/redux/actions/data';
import { State, Concept as IConcept } from '../../services/utils/@types';
import Btn from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Heading from './components/Heading';
import Body from './components/Body';
import ContentLoader from 'react-content-loader';
import { getBreadcrumb } from '../../services/utils/helpers';

function Concept(props) {
  const dispatch = useDispatch();
  const [breadCrumb, setBreadCrumb] = useState([]);

  const categories = useSelector((state: State) => state.data.categories);
  const loading = useSelector((state: State) => state.loading.getConcept);
  const data = useSelector((state: State) => {
    return state.data.concept[
      `${props.match.params.id}${props.match.params.conceptId}`
    ]
      ? state.data.concept[
          `${props.match.params.id}${props.match.params.conceptId}`
        ]
      : state.data.concept['default'];
  });

  const onBack = () => {
    props.history.goBack();
  };

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
    setBreadCrumb([...locationArray]);
  }, [props.match.params]);

  return (
    <ConceptView
      data={data}
      breadCrumb={getBreadcrumb(categories, [...breadCrumb])}
      onBack={onBack}
      loading={loading}
    />
  );
}

export default Concept;

export const ConceptLoading = () => (
  <ContentLoader viewBox={`0 0 200 100`}>
    <rect x="0" y="0" rx="5" ry="5" width="200" height="25" />
    <rect x="0" y="40" rx="5" ry="5" width="200" height="45" />
  </ContentLoader>
);

export function ConceptView({ data, breadCrumb, onBack, loading }: ViewProps) {
  return (
    <Wrapper data-testid="concept-description">
      <Btn
        onClick={onBack}
        theme="default"
        icon={<FontAwesomeIcon icon={faCaretLeft} />}
      >
        BACK
      </Btn>
      <BreadCrumb>
        <CategoryBreadCrumb data={breadCrumb} />
      </BreadCrumb>
      {loading ? (
        <ConceptLoading />
      ) : (
        <>
          <Heading data={data.headings}></Heading>
          <Body data={data.descriptions} />
        </>
      )}
    </Wrapper>
  );
}

interface ViewProps {
  data: IConcept;
  breadCrumb: Array<string>;
  onBack: Function;
  loading: boolean;
}

const Wrapper = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
  @media (max-width: 460px) {
    padding: 0rem;
    background: transparent;
  }
`;

const BreadCrumb = styled.div`
  text-align: center;
  width: 100%;
`;
