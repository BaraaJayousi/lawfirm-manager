// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import authentication from './authentication';
import contacts from './contacts';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, authentication, contacts });

export default reducers;
