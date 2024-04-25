// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import authentication from './authentication';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, authentication });

export default reducers;
