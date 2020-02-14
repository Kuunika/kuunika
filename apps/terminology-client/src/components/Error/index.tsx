import React, { useState, useEffect } from 'react';
import { State, IError, IErrors } from '../../services/utils/@types';
import { useSelector } from 'react-redux';
import BaseError from './Base';
import {
  faNetworkWired,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getCategories,
  getCategoryData,
  getConcept,
  resetError
} from '../../services/redux/actions/data';

function Error() {
  const [operationsWithErrors, setOperationsWithErrors] = useState([]);

  const categories = useSelector((state: State) => state.data.categories);

  const errors: IErrors = useSelector((state: State) => state.errors);
  const dispatch = useDispatch();

  const operations = { getCategories, getConcept, getCategoryData };
  const history = useHistory();

  useEffect(() => {
    setOperationsWithErrors(getOperationsWithErrors());
  }, [errors]);

  const goHome = () => {
    operationsWithErrors.forEach(value => {
      dispatch(resetError(value));
    });
    if (categories.length == 0) dispatch(getCategories());
    history.push('/');
  };

  const getOperationsWithErrors = () => {
    let operationsWithErrors = [];
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        if (
          key != 'meta' &&
          key != 'searchConcept' &&
          errors[key].status != 200
        )
          operationsWithErrors.push(key);
      }
    }
    return operationsWithErrors;
  };

  const reload = () => {
    operationsWithErrors.forEach(value => {
      dispatch(operations[value](...Object.values(errors['meta'][value])));
    });
  };

  return (
    <>
      {operationsWithErrors.length > 0 && (
        <BaseError
          message={errors[operationsWithErrors[0]].message}
          icon={faExclamationTriangle}
          status={errors[operationsWithErrors[0]].status}
          action={
            errors[operationsWithErrors[0]].status == 404
              ? () => goHome()
              : () => reload()
          }
          actionText={
            errors[operationsWithErrors[0]].status == 404
              ? 'Go Home'
              : 'Refresh'
          }
        />
      )}
    </>
  );
}

export default Error;
