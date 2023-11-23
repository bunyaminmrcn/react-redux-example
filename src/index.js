
import React from "react";
import { createRoot } from 'react-dom/client';
import Root from './Root';
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import App from "./components/App";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Root>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>
)