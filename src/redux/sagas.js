import {takeEvery, call, put, select, takeLatest} from 'redux-saga/effects';
import {FETCH_LIST, FETCH_LIST_PAGE} from './reducers';
import {fetchListFulfilled, fetchPageFulfilled} from './actions';

const url = page => `https://reqres.in/api/users?page=${page}`;

function* loadListFlow() {
  try {
    const response = yield call(fetch, url(1), {method: 'GET'});
    const responseBody = yield response.json();
    if (!responseBody?.data) {
      throw 'error';
    }
    yield put(fetchListFulfilled(responseBody.data));
  } catch (err) {
    console.warn('Ошибка загрузки списка');
  }
}

function* loadPageFlow() {
  try {
    const {page} = yield select(state => state);
    const response = yield call(fetch, url(page), {method: 'GET'});
    const responseBody = yield response.json();
    if (!responseBody?.data) {
      throw 'error';
    }

    yield put(fetchPageFulfilled(responseBody.data));
  } catch (err) {
    console.warn('Ошибка загрузки новой страницы списка');
  }
}

export default function* mySaga() {
  yield takeEvery([FETCH_LIST], loadListFlow);
  yield takeLatest([FETCH_LIST_PAGE], loadPageFlow);
}
