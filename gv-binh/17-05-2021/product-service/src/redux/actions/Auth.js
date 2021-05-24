export const authAction = Object.freeze({
    SIGN_IN: 'SIGN_IN',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_ERR: 'SIGN_IN_ERR',
})

const signIn = ({username, password}) => ({
    type: authAction.SIGN_IN,
    payload: {username, password}
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signIn
}