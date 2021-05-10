
const initialState = {
    data: [],
    isLoading: false,
    err: ''
}

const user = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case 'GET_USER':
            return {...state, isLoading: true}
        case 'GET_USER_SUCCESS': 
            return {...state, data: payload, isLoading: false}
        case 'GET_USER_ERR':
            return {...state, err: payload, isLoading: false}
        default:
            return state
    }
}

export default user;