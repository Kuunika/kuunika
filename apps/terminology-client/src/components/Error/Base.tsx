import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { State, IError } from '../../services/utils/@types';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Btn from '../Button';
import styled from 'styled-components';
import { theme } from '../../config/theme';

function BaseError({
  message,
  icon,
  status,
  action,
  actionText
}: {
  message: string;
  icon: any;
  status: Number;
  action?: Function;
  actionText?: string;
}) {
  return (
    <Container>
      <ErrorContainer>
        <Icon icon={icon} />
        <ErrorMessage>{message}</ErrorMessage>
        <Btn onClick={action ? action : () => location.reload()}>
          {actionText ? actionText : 'Refresh'}
        </Btn>
      </ErrorContainer>
    </Container>
  );
}

export default BaseError;

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  width: 80%;
  background: #ebebeb;
`;

const ErrorContainer = styled.div`
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 8rem;
  color: gray;
  margin: 1.3rem;
`;

const ErrorMessage = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${theme.darkColor};
`;
