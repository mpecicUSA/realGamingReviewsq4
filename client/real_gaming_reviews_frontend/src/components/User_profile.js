import React, { Component } from 'react';
import UserProfileReviewList from './User_profile_review_list.js'




class UserProfile extends Component {
    render() {
      return (
        <>
        <h1>User profile here</h1>
        <UserProfileReviewList />
        </>
      );
    }
  }
  
  export default UserProfile;