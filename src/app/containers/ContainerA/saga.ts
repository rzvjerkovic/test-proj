import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

let api = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Success!');
    }, 250);
  });

export function* increaseCounter() {
  yield api();

  yield put(actions.increaseCounterSuccess(2));
}

export function* containerASaga() {
  yield takeLatest(actions.increaseCounterStart.type, increaseCounter);
}
