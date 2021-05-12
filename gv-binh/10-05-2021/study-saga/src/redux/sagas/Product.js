import { call, fork, put, takeLatest } from "redux-saga/effects";
import { productService } from '../../services/product.servicer';
import {productAction} from '../actions/Product';

export function* getProduct(actions) {
    try {
        const reps = yield call(productService.getProducts, {})
        yield put({
            type: productAction.GET_PRODUCT_SUCCESS,
            payload: reps.data
        })
    } catch (error) {
        yield put({
            type: productAction.GET_PRODUCT_ERR,
            payload: error
        })
    }
}

export function* watchGetProduct() {
    yield takeLatest(productAction.GET_PRODUCT, getProduct)
}

export default function* reward() {
    yield fork(watchGetProduct)
}
