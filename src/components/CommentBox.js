import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions'
import { Navigate } from "react-router-dom";

class CommentBox extends Component {
   state = { comment: '', navigate: false }
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


   componentDidMount() {
      this.shouldNavigateAway()
   }

   componentDidUpdate() {
      this.shouldNavigateAway()
   }

   shouldNavigateAway() {
      if(!this.props.auth && this.state.navigate == false) {
         //console.log('I need to leave')
         this.setState({navigate: true})
      }
   }

   render() {
      return (
         <div>
            { this.state.navigate && <Navigate to="/" replace={true} />}
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


function mapStateToProps(state) {
   return {
      auth: state.auth
   }
}
export default connect(mapStateToProps, actions)(CommentBox);