import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../redux/reducers';
import mySaga from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(mySaga);

  return store;
}

export default configureStore;
