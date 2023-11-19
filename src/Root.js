import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reducer from "./reducers";
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: reducer
})

export default function(props) {
    return <Provider store={store}>{props.children}</Provider>
}