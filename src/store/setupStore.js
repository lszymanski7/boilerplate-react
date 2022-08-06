import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        dummyReducer: () => 'Replace Me!'
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
})

export { store as default }
