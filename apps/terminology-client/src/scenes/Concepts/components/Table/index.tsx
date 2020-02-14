import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './components/Pagination';
import { useParams, useHistory } from 'react-router-dom';

function Table({ headings, data }: Props) {
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
    console.log(params);
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
    <TableView
      headings={headings}
      data={formatedData}
      meta={meta}
      onChangePage={onChangePage}
      onClick={onConceptClick}
    />
  );
}

export default Table;

function TableView({ headings, data, meta, onChangePage, onClick }: ViewProps) {
  return (
    <div>
      <TableWrapper>
        <thead>
          <TableHeadersRow>
            {headings.map(t => (
              <Th key={t}>{t}</Th>
            ))}
          </TableHeadersRow>
          <TableHeadersRow />
        </thead>
        <tbody>
          {data.map(d => (
            <TableRow key={d.id} onClick={() => onClick(d.id)}>
              {headings.map(t => (
                <Td key={`${d.id}${t}`}>{d[t]}</Td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
      <TableFooter>
        <div>
          {meta.from} to {meta.to} of {meta.total} Records
        </div>
        <Pagination
          numberOfPages={meta.numberOfPages}
          pageNumber={meta.pageNumber}
          onClick={onChangePage}
        />
      </TableFooter>
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

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.7rem;
`;

const TableHeadersRow = styled.tr`
  margin-bottom: 2rem;
  border-radius: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

const TableRow = styled.tr`
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.7rem;
  background: white;
  white-space: nowrap;
  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }
  &:last-child {
    border-radius: 0px 20px 20px 0px;
  }
`;

const Td = styled.td`
  padding: 0.7rem;
  background: white;
  &:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  &:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  margin-top: 1rem;
  color: #a0a0a0;
  font-weight: bold;
`;
