import produce from "immer";
import {authAction} from '../actions/Auth';

const initialState = {
    data: [],
    err: '',
    loading: false
}

const auth = (state = initialState, actions) => produce(state, (draft) => {
    const {type, payload} = actions;
    switch (type) {
        case authAction.SIGN_IN:
            draft.loading = true    
            break;
        case authAction.SIGN_IN_SUCCESS:
            draft.loading = false    
            draft.data = payload
            break;
        case authAction.SIGN_IN_ERR:
            draft.loading = false;
            draft.err = payload;    
        // eslint-disable-next-line no-fallthrough
        default:
            break;
    }
}) 

export default auth;