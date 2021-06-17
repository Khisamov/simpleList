// @flow

type ReducerState = {
  isLoggedIn: Boolean,
  isLoading: Boolean,
  isLoadingPage: Boolean,
  list: Array<Object>,
};

const initialState: ReducerState = {
  isLoggedIn: false,
  isLoading: false,
  isLoadingPage: false,
  page: 1,
};

export const LOGGED_IN = 'LOGGED_IN';
export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_FULFILLED = 'FETCH_LIST_FULFILLED';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';
export const FETCH_LIST_PAGE = 'FETCH_LIST_PAGE';
export const FETCH_LIST_PAGE_ERROR = 'FETCH_LIST_PAGE_ERROR';
export const FETCH_LIST_PAGE_FULFILLED = 'FETCH_LIST_PAGE_FULFILLED';

export default function myReducer(
  state: ReducerState = initialState,
  action: any = {},
) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case FETCH_LIST:
      return {
        ...state,
        isLoading: true,
        list: initialState.list,
        page: initialState.page,
      };
    case FETCH_LIST_FULFILLED:
      return {
        ...state,
        isLoading: initialState.isLoading,
        list: action.payload,
        page: state.page + 1,
      };
    case FETCH_LIST_PAGE:
      return {
        ...state,
        isLoadingPage: true,
      };
    case FETCH_LIST_PAGE_FULFILLED: {
      return {
        ...state,
        isLoadingPage: initialState.isLoadingPage,
        list: [...state.list, ...action.payload],
        page: state.page + 1,
      };
    }
    case FETCH_LIST_ERROR:
    case FETCH_LIST_PAGE_ERROR: {
      return {
        ...state,
        isLoadingPage: initialState.isLoadingPage,
        isLoading: initialState.isLoading,
      };
    }
    default:
      return state;
  }
}
