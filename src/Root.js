import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reducer from "./reducers";


export default ({ children , initialState = {}}) => {

    const store = configureStore({
        // Automatically calls `combineReducers`
        reducer: reducer,
        preloadedState: initialState
    })

    return <Provider store={store}>{children}</Provider>
}