import React from 'react';
import { State, IError } from '../../services/utils/@types';
import { useSelector } from 'react-redux';
import BaseError from './Base';
import {
  faNetworkWired,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function Error() {
  const error: IError = useSelector((state: State) => state.errors.error);
  const history = useHistory();
  return (
    <>
      {error.status != 200 && (
        <BaseError
          message={error.message}
          icon={faExclamationTriangle}
          status={error.status}
          action={
            error.status == 404
              ? () => history.push('/')
              : () => location.reload()
          }
          actionText={error.status == 404 ? 'Go Home' : 'Refresh'}
        />
      )}
    </>
  );
}

export default Error;
