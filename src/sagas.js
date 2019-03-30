import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FETCH_DATA_PENDING,
} from './actions';
import { fetchPosts, fetchPost } from './services';

function* handleFetchPosts() {
  try {
    const response = yield call(fetchPosts);

    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: { data: response },
    });
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAIL,
      error,
    });
  }
}

function* handleFetchPost(action) {
  try {
    const response = yield call(fetchPost, action.payload.ID);

    yield put({
      type: 'FETCH_POST_SUCCESS',
      payload: { post: response },
    });
  } catch (error) {
    yield put({
      type: 'FETCH_POST_FAIL',
      error,
    });
  }
}

export default function* rootSaga() {
  yield all(
    [
      takeLatest(FETCH_DATA_PENDING, handleFetchPosts),
      takeLatest('FETCH_POST_PENDING', handleFetchPost),
    ],
  );
}
