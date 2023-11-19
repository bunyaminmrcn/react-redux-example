import React from "react";
//import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom'

import App from "../App";
import { screen, render } from '@testing-library/react';

it('shows a comment box', ()=> {
    
    render(<App />)
    const linkElement = screen.getByText(/Comment Box/i)
    expect(linkElement).toBeInTheDocument();



})
