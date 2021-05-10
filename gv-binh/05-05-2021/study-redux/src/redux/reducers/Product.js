
const initalState = {
    loading: false,
    data: [],
    err: ''
}

const product = (state = initalState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case 'GET_PRODUCT':
            return {...state, loading: true}
        case 'GET_PRODUCT_SUCCESS': 
            return {...state, loading: false, data: payload}
        case 'GET_PRODUCT_ERR':
            return {...state, loading: false, err: payload}
        default:
            return state
    }
}

export default product