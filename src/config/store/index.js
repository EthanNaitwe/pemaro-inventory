import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { expensesReducer } from './reducers/expensesReducers';
import { productsReducer } from './reducers/productsReducer';
import { salesReducer } from './reducers/salesReducers';
import { settingsReducer } from './reducers/settingsReducer';
import { usersReducer } from './reducers/usersReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// Only add logger in development mode
// if (import.meta.env.MODE === 'development') {
middlewares.push(logger);
//   }

export const store = configureStore({
    reducer: {
        users: usersReducer,
        settings: settingsReducer,
        products: productsReducer,
        sales: salesReducer,
        expenses: expensesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            immutableCheck: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
