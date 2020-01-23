// @ts-ignore
import { join, camelCase, split } from 'lodash';
export default (state = {}, action: any) => {
  let actionGroup = join(
    split(action.type, '_', split(action.type, '_').length - 1),
    '_'
  );

  let formattedActionGroup = camelCase(actionGroup);

  switch (action.type) {
    case `${actionGroup}_PENDING`:
      return {
        ...state,
        [`${formattedActionGroup}`]: []
      };
    case `${actionGroup}_REJECTED`:
      return {
        ...state,
        [formattedActionGroup]: ['There was a general error']
      };
    case `${actionGroup}_FULFILLED`:
      return {
        ...state,
        [formattedActionGroup]: []
      };

    default:
      return state;
  }
};
