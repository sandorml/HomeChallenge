import { put, takeEvery, all } from 'redux-saga/effects';
import { actions_const, actions_func } from "../actions";
import Api from '../services/api';





function* fetchPropertiesSaga() {
    function* fetchProperties() {
        var properties = yield Api.getProperties(({ data }) => data.filter(e=> !e.is_deleted));
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.FETCH_PROPERTIES, fetchProperties);
}


function* addPropertySaga() {
    function* addProperty({item}) {
        console.log("addProp",item);
        yield Api.addProperty(({ data }) => data, item);
        yield put(actions_func.fetchProperties());
    }
    yield takeEvery(actions_const.ADD_PROPERTY, addProperty);
}



function* updatePropertySaga() {
    function* updateProperty({item}) {
        yield Api.updateProperty(({ data }) => data, item);
        yield put(actions_func.fetchProperties());

    }
    yield takeEvery(actions_const.UPDATE_PROPERTY, updateProperty);
}

function* deletePropertySaga() {
    function* deleteProperty({item}) {
        item.is_deleted = true;
        yield Api.updateProperty(({ data }) => data,item);
        yield put(actions_func.fetchProperties());

    }
    yield takeEvery(actions_const.DELETE_PROPERTY, deleteProperty);
}

function* addLabelSaga() {

    function* addLabel({item}) {
        yield Api.addLabel(({ data }) => data,item);
        yield put(actions_func.fetchLabels());
    }
    yield takeEvery(actions_const.ADD_LABEL, addLabel);
}

function* fetchLabelsSaga() {
    function* fetchLabels() {
        var labels = yield Api.getLabels(({ data }) => data);
        yield put(actions_func.loadLabels(labels));
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