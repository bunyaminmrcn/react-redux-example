
import React, { Component } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import {
    Routes,
    Route,
    Outlet,Link
} from "react-router-dom";
import { connect } from "react-redux";

import * as actions from '../actions/index'
export default class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/post" element={<CommentBox />} />
                    <Route path="/list" element={<CommentList />} />
                </Route>
            </Routes>
        )
    }
    
}


class RenderButton extends Component {
    render() {
        if(this.props.auth) {
            return <button onClick={()=> this.props.changeAuth(false)}>Sign out</button>
        } else {
            return <button onClick={()=> this.props.changeAuth(true)}>Sign in</button>
        }
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const WrappedButton = connect(mapStateToProps, actions)(RenderButton);
function Layout() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/post">Post a Comment</Link>
          </li>
          <li>
            <Link to="/list">Comments</Link>
          </li>
          <li>
             <WrappedButton />
          </li>
        </ul>
        <Outlet />
      </div>
    );
  }