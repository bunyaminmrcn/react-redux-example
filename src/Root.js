import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reduxPromise  from 'redux-promise';


import reducer from "./reducers";


export default ({ children , initialState = {}}) => {

    const store = configureStore({
        // Automatically calls `combineReducers`
        reducer: reducer,
        preloadedState: initialState,
        middleware: [reduxPromise]
    })

    return <Provider store={store}>{children}</Provider>
}