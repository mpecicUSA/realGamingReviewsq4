import React, { Component } from 'react';







class UserProfileReviewList extends Component {
    render() {
      console.log("USER PROPS", this.props)
      console.log("Match", this.props.match.params.id)
       let individualUser = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
       if(individualUser){
      return (
        <>
        <div>
          <h1>{individualUser.userName}</h1>
        </div>
        <div>
          <img src="https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif" alt="profile image" />
        </div>
        <div>
          <h2>Your Reviews:</h2>
        </div>
        <div>
          {this.props.reviews.filter(review => review.user_id == this.props.match.params.id)}
        </div>
        </>
        );
      }else{
        return 'error';
      }
    }
  }
  
  export default UserProfileReviewList;