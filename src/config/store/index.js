import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas/rootSaga';
import { userReducer } from './reducers/userReducer';
import { settingsReducer } from './reducers/settingsReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// Only add logger in development mode
// if (import.meta.env.MODE === 'development') {
middlewares.push(logger);
//   }

export const store = configureStore({
    reducer: {
        user: userReducer,
        settings: settingsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
