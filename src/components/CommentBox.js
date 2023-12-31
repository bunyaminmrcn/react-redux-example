import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions'
import requireAuth from "./requireAuth";


class CommentBox extends Component {
   state = { comment: '' }
   handleChange = (event) => {
      this.setState({ comment: event.target.value })
   }
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.saveComment(this.state.comment)
      // TODO - Call an action creator
      // and save the comment
      this.setState({ comment: '' })
   }


   

   render() {
      return (
         <div>
            
            <form onSubmit={this.handleSubmit}>
               <h4>Add a Comment</h4>
               <textarea onChange={this.handleChange} value={this.state.comment} />
               <div>
                  <button>Submit Comment</button>
               </div>
            </form>
            <button className="fetch_comments" onClick={this.props.fetchComments}>Fetch Comments</button>
         </div>
      )
   }
}



export default connect(null, actions)(requireAuth(CommentBox));