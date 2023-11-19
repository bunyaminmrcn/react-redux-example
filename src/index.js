
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reducer from "./reducers";
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: reducer
})

import App from "./components/App";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Provider store={store}><App /></Provider>)