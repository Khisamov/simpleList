import {
  LOGGED_IN,
  FETCH_LIST,
  FETCH_LIST_FULFILLED,
  FETCH_LIST_PAGE,
  FETCH_LIST_PAGE_FULFILLED,
} from './reducers';

export const onLoggedIn = () => ({
  type: LOGGED_IN,
});

export const fetchList = () => ({
  type: FETCH_LIST,
});

export const fetchListFulfilled = payload => ({
  type: FETCH_LIST_FULFILLED,
  payload,
});

export const fetchPage = () => ({
  type: FETCH_LIST_PAGE,
});

export const fetchPageFulfilled = payload => ({
  type: FETCH_LIST_PAGE_FULFILLED,
  payload,
});
