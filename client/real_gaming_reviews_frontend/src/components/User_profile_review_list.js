import React, { Component } from 'react';





class UserProfileReviewList extends Component {
    render() {
      console.log("USER PROPS", this.props)
      console.log("Match", this.props.match.params.id)
       let individualUser = this.props.users.filter(user => Number(user.id) === Number(this.props.match.params.id))[0]
       if(individualUser){
      return (
        <>
        <div>
          <h1>{individualUser.userName}</h1>
        </div>
        <div>
          <img src="https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif" alt="profile" />
        </div>
        <div>
          <h2>Your Reviews:</h2>
        </div>
        <div>
          {this.props.reviews.filter(review => review.user_id === this.props.match.params.id)
           .map(review => {
             return <div>
              <div>
                <h3>{review.review_title}</h3>
              </div>
              <div>
                <h4>{review.review}</h4>
              </div>
            </div>
           })
          }
        </div>
        </>
        );
      }else{
        return 'error';
      }
    }
  }
  
  export default UserProfileReviewList;