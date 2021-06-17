import {takeEvery, call, put, select, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {FETCH_LIST, FETCH_LIST_PAGE} from './reducers';
import {
  fetchListFulfilled,
  fetchPageFulfilled,
  fetchList,
  fetchPage,
  fetchListError,
  fetchPageError,
} from './actions';
import store from '../app/configureStore';

const url = page => `https://reqres.in/api/users?page=${page}`;

const alertError = func =>
  Alert.alert(
    'Произошла ошибка',
    'Ошибка при отправке запроса. Повторите попытку отправки',
    [
      {
        text: 'Повторить',
        onPress: () => store.dispatch(func()),
      },
      {
        text: 'Отмена',
        onPress: () => {},
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );

function* loadListFlow() {
  try {
    const response = yield call(fetch, url(1), {method: 'GET'});
    const responseBody = yield response.json();
    if (!responseBody?.data) {
      throw 'error';
    }
    yield put(fetchListFulfilled(responseBody.data));
  } catch (err) {
    alertError(fetchList);
    yield put(fetchListError());
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
    alertError(fetchPage);
    yield put(fetchPageError());
  }
}

export default function* mySaga() {
  yield takeEvery([FETCH_LIST], loadListFlow);
  yield takeLatest([FETCH_LIST_PAGE], loadPageFlow);
}
