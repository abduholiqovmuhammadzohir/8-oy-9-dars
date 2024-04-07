import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userTokenReducer from './userToken';

const rootReducer = combineReducers({
    userToken: userTokenReducer,
});

export default configureStore({ reducer: rootReducer });
