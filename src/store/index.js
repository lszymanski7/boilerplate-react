import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

// Function ➞ configures the redux store
const store = configureStore({
    reducer: {
        dummyReducer: () => 'Replace Me!'
    },
    middleware: (getDefaultMiddleware) =>
        process.env.NODE_ENV !== 'production'
            ? getDefaultMiddleware().concat(logger)
            : getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export { store as default }
