import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../config/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faCaretRight,
  faForward,
  faBackward,
  faCaretLeft
} from '@fortawesome/free-solid-svg-icons';

function Pagination({ pageNumber, numberOfPages, onClick }: Props) {
  return (
    <div>
      Page {pageNumber} of {numberOfPages}
      <BtnContainer>
        {pageNumber > 1 && (
          <>
            <Btn onClick={() => onClick('first')}>
              <FontAwesomeIcon icon={faBackward} />
            </Btn>
            <Btn onClick={() => onClick('prev')}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </Btn>
          </>
        )}
        <Btn>{pageNumber}</Btn>
        {pageNumber < numberOfPages && (
          <>
            <Btn onClick={() => onClick('next')}>
              <FontAwesomeIcon icon={faCaretRight} />
            </Btn>
            <Btn onClick={() => onClick('last')}>
              <FontAwesomeIcon icon={faForward} />
            </Btn>
          </>
        )}
      </BtnContainer>
    </div>
  );
}

interface Props {
  pageNumber: number;
  numberOfPages: number;
  onClick: Function;
}

export default Pagination;

const Btn = styled.div`
  color: ${theme.darkColor};
  background: white;
  display: inline-block;
  border: 1px solid gray;
  padding: 0px 1rem;
  cursor: pointer;
  &:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  &:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

const BtnContainer = styled.div`
  margin-left: 1rem;
  display: inline-block;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;
