//import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom'

import { mount } from 'enzyme';
import App from "components/App";
import Root from 'Root';
import moxios from "moxios";

let wrapper;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1'}, { name: 'Fetched #2'}]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch a list of comments to display them', (done) => {
    wrapper = mount(<Root><App /></Root>)
    wrapper.find('button.fetch_comments').simulate('click')
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(2)
        done()
        wrapper.unmount()
    })
    
   
})
