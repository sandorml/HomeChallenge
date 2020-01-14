import { put, takeEvery, all } from 'redux-saga/effects';
import { actions_const, actions_func } from "../actions";
import Api from '../services/api';
import filters from '../helpers/filters';




function* fetchPropertiesSaga() {
    function* fetchProperties() {
        let properties = yield Api.getProperties((data) => data.filter(e => !e.is_deleted));
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.FETCH_PROPERTIES, fetchProperties);
}


function* addPropertySaga() {
    function* addProperty({ item }) {
        yield Api.addProperty((data) => data, item);
        yield put(actions_func.fetchProperties());
    }
    yield takeEvery(actions_const.ADD_PROPERTY, addProperty);
}



function* updatePropertySaga() {
    function* updateProperty({ item }) {
        yield Api.updateProperty((data) => data, item);
        yield put(actions_func.fetchProperties());
    }
    yield takeEvery(actions_const.UPDATE_PROPERTY, updateProperty);
}

function* deletePropertySaga() {
    function* deleteProperty({ item }) {
        item.is_deleted = true;
        yield Api.updateProperty((data) => data, item);
        yield put(actions_func.fetchProperties());
    }
    yield takeEvery(actions_const.DELETE_PROPERTY, deleteProperty);
}

function* addLabelSaga() {

    function* addLabel({ item }) {
        yield Api.addLabel((data) => data, item);
        yield put(actions_func.fetchLabels());
    }
    yield takeEvery(actions_const.ADD_LABEL, addLabel);
}

function* fetchLabelsSaga() {
    function* fetchLabels() {
        let labels = yield Api.getLabels((data) => data);
        yield put(actions_func.loadLabels(labels));
    }
    yield takeEvery(actions_const.FETCH_LABELS, fetchLabels);
}



function* typeFilterSaga() {
    function* typeFilter({ pattern }) {
        let properties = yield Api.getProperties(filters.typeFilter(pattern));
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.TYPE_FILTER, typeFilter);
}

function* priceFilterSaga() {
    function* priceFilter({ pattern, lt }) {
        let properties = yield Api.getProperties(filters.priceFilter(pattern, lt));
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.PRICE_FILTER, priceFilter);
}

function* deletedFilterSaga() {
    function* deletedFilter({ deleted }) {
        let properties = yield Api.getProperties(filters.deletedFilter(deleted));
        yield put(actions_func.loadProperties(properties));

    }
    yield takeEvery(actions_const.DELETED_FILTER, deletedFilter);
}

function* order_by_priceFilterSaga() {
    function* order_by_priceFilter({ order }) {
        let properties = yield Api.getProperties(filters.order_by_priceFilter(order));
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.ORDER_BY_PRICE, order_by_priceFilter);
}

function* order_by_sizeFilterSaga() {
    function* order_by_sizeFilter({ order }) {
        let properties = yield Api.getProperties(filters.order_by_sizeFilter(order));
        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.ORDER_BY_SIZE, order_by_sizeFilter);
}



function* offlineFilterSaga() {
    function* offlineFilter({ filter }) {
        let properties = yield Api.getProperties(data => data);
        console.log("all");
        
        console.log(properties);
        console.log("deleted");
        if (filter.deleted) {
            properties = filters.deletedFilter(filter.deleted)(properties);
        }
        console.log(properties);
        
        console.log("type");
        if (filter.type) {
            properties = filters.typeFilter(filter.type)(properties);
        }
        
        console.log(properties);
        console.log("price",filter);

        if (filter.price) {
            properties = filters.priceFilter(filter.price.value,filter.price.lt)(properties);
        }
        
        console.log(properties);
        
        console.log("order price");
        if (filter.order_by_price) {
            properties = filters.order_by_priceFilter(filter.order_by_price)(properties);
        }
        
        console.log(properties);
        
        console.log("order size");
        if (filter.order_by_size) {
            properties = filters.order_by_sizeFilter(filter.order_by_size)(properties);
        }
        console.log(properties);

        yield put(actions_func.loadProperties(properties));
    }
    yield takeEvery(actions_const.OFFLINE_FILTER, offlineFilter);
}






export default function* rootSaga() {
    yield all([
        fetchPropertiesSaga(),
        addPropertySaga(),
        updatePropertySaga(),
        deletePropertySaga(),
        addLabelSaga(),
        fetchLabelsSaga(),
        typeFilterSaga(),
        order_by_priceFilterSaga(),
        order_by_sizeFilterSaga(),
        deletedFilterSaga(),
        priceFilterSaga(),
        typeFilterSaga(),
        offlineFilterSaga()
    ])
}