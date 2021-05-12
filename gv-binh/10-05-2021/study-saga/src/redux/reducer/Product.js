import produce from 'immer';
import { productAction } from '../actions/Product';

const initialState = {
    data: [],
    loading: false,
    err: ''
}

const product = (state = initialState, actions) => produce(state, (draf) => {
    const {type, payload} = actions;
    switch (type) {
        case productAction.GET_PRODUCT:
            draf.loading = true;
            break;
        case productAction.GET_PRODUCT_SUCCESS: 
            draf.loading = false;
            draf.data = payload;
            break;
        case productAction.GET_PRODUCT_ERR:
            draf.loading = false
            draf.err = payload
        // eslint-disable-next-line no-fallthrough
        default:
            break;
    }
})

export default product;