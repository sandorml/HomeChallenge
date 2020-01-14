import { put, takeEvery, all } from 'redux-saga/effects';
import { actions_const, actions_func } from "../actions";
import Api from '../services/api';




function* fetchPropertiesSaga() {
    function* fetchProperties() {
        var properties = yield Api.getProperties(({ data }) => data);
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.FETCH_PROPERTIES, fetchProperties);
}


function* addPropertySaga() {
    function* addProperty(item) {
        var property = yield Api.addProperty(({ data }) => data, item);
        yield put(actions_func.addProperty(property));
    }

    yield takeEvery(actions_const.ADD_PROPERTY, addProperty);
}



function* updatePropertySaga() {

    function* updateProperty(item) {
        var property = yield Api.updateProperty(({ data }) => data, item);
        yield put(actions_func.updateProperty(property));
    }
    yield takeEvery(actions_const.UPDATE_PROPERTY, updateProperty);
}

function* deletePropertySaga() {

    function* deleteProperty(item) {
        item['is_deleted'] = false;
        var property = yield Api.updateProperty(({ data }) => data,item);
        yield put(actions_func.deleteProperty(property));
    }
    yield takeEvery(actions_const.DELETE_PROPERTY, deleteProperty);
}

function* addLabelSaga() {

    function* addLabel(item) {
        var label = yield Api.addLabel(({ data }) => data,item);
        yield put(actions_func.addLabel(label));
    }
    yield takeEvery(actions_const.ADD_LABEL, addLabel);
}

function* fetchLabelsSaga() {

    function* fetchLabels() {
        var labels = yield Api.fetchLabels(({ data }) => data);
        yield put(actions_func.fetchLabels(labels));
    }
    yield takeEvery(actions_const.FETCH_LABELS, fetchLabels);
}



export default function* rootSaga() {
    yield all([
        fetchPropertiesSaga(),
        addPropertySaga(),
        updatePropertySaga(),
        deletePropertySaga(),
        addLabelSaga(),
        fetchLabelsSaga()
    ])
}