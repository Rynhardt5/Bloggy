import _ from 'lodash';

import {
  CREATE_POST,
  GET_POST_LIST,
  DELETE_POST,
  GET_POST
} from '../_constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_POST_LIST:
      return { ...state, ..._.mapKeys(payload, 'id') };
    case GET_POST:
      return { ...state, [payload.id]: payload };
    case CREATE_POST:
      return { ...state, [payload.id]: payload };
    case DELETE_POST:
      return _.omit(state, payload);
    default:
      return state;
  }
};
