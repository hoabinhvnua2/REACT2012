import { combineReducers } from 'redux';
import product from './Product';
import user from './User';

export default combineReducers({
    product,
    user
})