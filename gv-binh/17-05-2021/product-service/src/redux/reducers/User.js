import produce from "immer"

const initialState = {
    data: [],
    err: '',
    loading: false
}

const users = (state = initialState, actions) => produce(state, (draft) => {
    const {type, payload} = actions;
    switch (type) {
        case 'GET_USER':
            draft.loading = true    
        // eslint-disable-next-line no-fallthrough
        default:
            break;
    }
}) 

export default users;