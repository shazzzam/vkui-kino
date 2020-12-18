import { call, put, select, takeLatest } from 'redux-saga/effects';

import { FILMS_REQUEST_ONE, FILMS_REQUEST_LIST } from './films/filmsTypes';
import {
  listErrorSet,
  listErrorUnset,
  listLoaderSet,
  listLoaderUnset,
  oneErrorSet,
  oneErrorUnset,
  oneLoaderSet,
  oneLoaderUnset,
  updateList,
  updateOne,
} from './films/filmsActions';
import { api } from '../constants';

export function* sagaWatcher() {
  yield takeLatest(FILMS_REQUEST_LIST, filmsListWorker);
  yield takeLatest(FILMS_REQUEST_ONE, filmsOneWorker);
}

function* filmsListWorker() {
  yield put(listErrorUnset());
  yield put(listLoaderSet());
  const page = yield select((state) => state.films.currentPage);
  const data = yield call(fetchList, page + 1);
  if (data === null) {
    yield put(listErrorSet());
  } else if (data.films) {
    yield put(updateList(data.films));
  }
  yield put(listLoaderUnset());
}

function* filmsOneWorker({ payload }) {
  yield put(oneErrorUnset());
  yield put(oneLoaderSet());
  const data = yield call(fetchOne, payload);
  if (data) {
    console.log(data);
    yield put(updateOne(data.data));
  } else {
    yield put(oneErrorSet());
  }
  yield put(oneLoaderUnset());
}

const fetchList = async (page) => {
  try {
    const res = await fetch(`${api.base}/${api.list}${page}`, api.options);
    return await res.json();
  } catch {
    return null;
  }
};

const fetchOne = async (id) => {
  try {
    const res = await fetch(`${api.base}/${api.one}/${id}`, api.options);
    return await res.json();
  } catch {
    return null;
  }
};
