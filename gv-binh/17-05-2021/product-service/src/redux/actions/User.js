export const userAction = Object.freeze({
    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERR: 'GET_USER_ERR',

    REGISTER_USER: 'REGISTER_USER',
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_ERR: 'REGISTER_USER_ERR'
})

const getUser = () => ({
    type: userAction.GET_USER,
    payload: {}
})

const registerUser = (params) => ({
    type: userAction.REGISTER_USER,
    payload: params
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUser,
    registerUser
}