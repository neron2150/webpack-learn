import * as actions from '../actions';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DATA_PENDING:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload.data,
      };
    case actions.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default: return state;
  }
};
