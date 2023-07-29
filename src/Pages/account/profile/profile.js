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
        <h2>{`${firstName}'s Profile`}</h2>
      </div>
      <div>
        <h3>{`First Name: ${firstName}`}</h3>
        <h3>{`Last Name: ${lastName}`}</h3>
        <h3>{`First Name: ${email}`}</h3>
      </div>
    </div>
  )
}

export default Profile
