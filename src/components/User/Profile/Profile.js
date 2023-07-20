import React, { useState, useEffect } from "react";
import './Profile.css'
import { Redirect } from "react-router-dom";
import Card from "../../Window/Card/Card";
// import Loading from "../Loading/Loading";

const Profile = ({id, setCurrentUser, setUserName}) => {
    const [userListings, setListings] = useState([])
    const [user, setUser] = useState({})
    const [userFilter, setUserFilter] = useState('')

    return (
        ''
    )
}

export default Profile
