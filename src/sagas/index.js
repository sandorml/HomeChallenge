import { put, takeEvery, all } from 'redux-saga/effects';
import { actions_const, actions_func } from "../actions";
import Api from '../services/api';

async function fetchAsync(func) {
    const response = await func();
    if (response.ok) {
        console.log(response);
        return await response.json();
    }
    throw new Error("Unexpected error!!!");
}

function* fetchProperties() {
    try {
        const properties = yield fetchAsync(Api.getProperties);
        yield put(actions_func.loadProperties(properties));
    } catch (e) { 
        console.log(e) 
    }
}

function* fetchPropertiesSaga() {
    // Allows concurrent fetches of users   
    yield takeEvery(actions_const.LOAD_PROPERTIES, fetchProperties);
    // Does not allow concurrent fetches of users   
    // yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}


export default function* rootSaga() {
    yield all([
      fetchPropertiesSaga(),
    ])
  }