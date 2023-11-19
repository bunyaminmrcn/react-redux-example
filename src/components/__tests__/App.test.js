import React from "react";
//import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom'

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

import { screen, render } from '@testing-library/react';

import { shallow } from 'enzyme';
import sinon from 'sinon';


let wrapper;

beforeEach(()=> {
    wrapper = shallow(<App />);
});
it('shows a comment box', ()=> {
    
    expect(wrapper.find(CommentBox).length).toEqual(1)

})


it('shows a comment list', ()=> {
    
    expect(wrapper.find(CommentList).length).toEqual(1)

})
