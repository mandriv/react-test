import { combineReducers } from 'redux';
// individual reducers imports
import cakes from './cakes';

const AppReducer = combineReducers({ cakes });

export default AppReducer;
