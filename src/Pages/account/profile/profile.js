import React from "react";

import './profile.css'

const Profile = (loggedUser) => {
  const userData  = JSON.parse(loggedUser.loggedUser)
  const firstName = userData.attributes.first_name;
  const lastName  = userData.attributes.last_name;
  const email     = userData.attributes.email;

  console.log(firstName);

  return (
    <div>
      <div className="profile_top-heading">
        <h3>{`${firstName}'s Profile`}</h3>
      </div>
      <div>
        <div>{`First Name: ${firstName}`}</div>
        <div>{`Last Name: ${lastName}`}</div>
        <div>{`First Name: ${email}`}</div>
      </div>
    </div>
  )
}

export default Profile
