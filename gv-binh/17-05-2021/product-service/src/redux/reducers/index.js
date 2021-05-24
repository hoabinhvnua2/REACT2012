import { combineReducers } from "redux";
import users from './User';
import auth from './Auth';

const rootReduce = combineReducers({
    users,
    auth
})

export default rootReduce