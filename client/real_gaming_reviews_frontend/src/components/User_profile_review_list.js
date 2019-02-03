import React, { Component } from 'react';







class UserProfileReviewList extends Component {
    render() {
      console.log("USER PROPS", this.props)
      console.log("Match", this.props.match.params.id)
       let individualUser = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
      return (
        <>
        
        </>
      );
    }
  }
  
  export default UserProfileReviewList;