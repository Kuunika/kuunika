// @ts-ignore
import { join, camelCase, split } from 'lodash';
import { IErrors } from '../../utils/@types';
import actions from '../actions/actions';

export default (
  state = { error: { status: 200, message: '' } } as IErrors,
  action: any
) => {
  let actionGroup = join(
    split(action.type, '_', split(action.type, '_').length - 1),
    '_'
  );

  let formattedActionGroup = camelCase(actionGroup);

  switch (action.type) {
    case `${actionGroup}_PENDING`:
      return {
        ...state,
        [`${formattedActionGroup}`]: { status: 200, message: '' },
        meta: {
          ...state.meta,
          [`${formattedActionGroup}`]: action.meta
        }
      };
    case `${actionGroup}_REJECTED`:
      return {
        ...state,
        [formattedActionGroup]: {
          status: action.payload.response.status,
          message:
            action.payload.response.status == 404
              ? 'Not Found'
              : 'There was an error while fetching data.'
        }
      };

    case `${actionGroup}_FULFILLED`:
      return {
        ...state,
        [formattedActionGroup]: { status: 200, message: '' }
      };
    case `${actions.resetError}`:
      return {
        ...state,
        [action.payload]: { status: 200, message: '' }
      };
    default:
      return state;
  }
};
