import React from 'react';
import BaseError from './Base';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function ScriptError() {
  const goHome = () => {
    location.replace('/');
  };

  return (
    <>
      <BaseError
        message={`Something went wrong :(`}
        icon={faExclamationTriangle}
        status={500}
        action={goHome}
        actionText="Go Home"
        full
      />
    </>
  );
}

export default ScriptError;
