import { put, takeEvery, all } from 'redux-saga/effects';
import { actions_const, actions_func } from "../actions";
import Api from '../services/api';



function* fetchProperties() {
    var properties =  yield Api.getProperties(({ data }) => data);
    yield put(actions_func.loadProperties(properties));

}

function* fetchPropertiesSaga() {
    // Allows concurrent fetches of users   
    yield takeEvery(actions_const.FETCH_PROPERTIES, fetchProperties);
    // Does not allow concurrent fetches of users   
    // yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}


export default function* rootSaga() {
    yield all([
        fetchPropertiesSaga(),
    ])
}