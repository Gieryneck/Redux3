import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

const rootReducer = combineReducers({
    
    comments,
    users
});



export default rootReducer;