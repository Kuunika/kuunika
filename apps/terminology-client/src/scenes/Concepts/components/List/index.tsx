import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './components/Pagination';
import { useParams, useHistory } from 'react-router-dom';
import { theme } from '../../../../config/theme';

function List({ headings, data }: Props) {
  const [page, setPage] = useState(0);
  const [meta, setMeta] = useState({
    from: 0,
    to: 0,
    total: 0,
    numberOfPages: 0,
    pageNumber: 0
  });

  const history = useHistory();
  const params = useParams();

  const [formatedData, setFormatedData] = useState([]);
  const count = 10;

  useEffect(() => {
    setFormatedData([...data].slice(page * count, page * count + count));
  }, [page, data]);

  useEffect(() => {
    const base = (page + 1) * count;

    const numberOfPages = Math.ceil(Number(data.length) / count);

    setMeta({
      from: base - count + 1,
      to: base > data.length ? data.length : base,
      total: data.length,
      numberOfPages,
      pageNumber: page + 1
    });
  }, [page, data]);

  const onConceptClick = conceptId => {
    const base = history.location.pathname;
    const basePath = `${base.slice(0, base.indexOf('view'))}view`;
    history.push(`${basePath}/${params['id']}/${conceptId}`);
  };
  const onChangePage = (action: 'next' | 'prev' | 'first' | 'last') => {
    switch (action) {
      case 'first':
        setPage(0);
        break;
      case 'last':
        setPage(meta.numberOfPages - 1);
        break;
      case 'next':
        setPage(page + 1);
        break;
      case 'prev':
        setPage(page - 1);
        break;
      default:
        break;
    }
  };
  return (
    <ListView
      headings={headings}
      data={formatedData}
      meta={meta}
      onChangePage={onChangePage}
      onClick={onConceptClick}
    />
  );
}

export default List;

function ListView({ headings, data, meta, onChangePage, onClick }: ViewProps) {
  return (
    <div>
      <ListWrapper>
        {data.map(d => (
          <ListItem key={d.id} onClick={() => onClick(d.id)}>
            {headings.map(
              (t, index) =>
                index <= 2 && (
                  <Property key={`${d.id}${t}`}>
                    <PropertyHeading>{t}</PropertyHeading>
                    {d[t]}
                  </Property>
                )
            )}
          </ListItem>
        ))}
      </ListWrapper>
      <ListFooter>
        <Pagination
          numberOfPages={meta.numberOfPages}
          pageNumber={meta.pageNumber}
          onClick={onChangePage}
        />
      </ListFooter>
    </div>
  );
}

interface Props {
  headings: Array<string>;
  data: Array<any>;
}
interface ViewProps {
  headings: Array<string>;
  data: Array<any>;
  meta: {
    from: number;
    to: number;
    total: number;
    numberOfPages: number;
    pageNumber: number;
  };
  onChangePage: Function;
  onClick: Function;
}

const ListWrapper = styled.div`
  width: 100%;
`;

const ListItem = styled.div`
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  margin: 1rem 0rem;
  overflow: hidden;
`;

const Property = styled.div`
  padding: 0.7rem;
  background: white;
`;
const PropertyHeading = styled.div`
  color: ${theme.darkColor};
  font-weight: bold;
  text-transform: capitalize;
`;

const ListFooter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  margin-top: 1rem;
  color: #a0a0a0;
  font-weight: bold;
`;
