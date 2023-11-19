import '@testing-library/jest-dom'

import { mount } from 'enzyme';
import CommentList from "components/CommentList";
import Root from 'Root';

let wrapper;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})


it('creates on LI per commnet', () => {

    console.log(wrapper.find('li').length);
})