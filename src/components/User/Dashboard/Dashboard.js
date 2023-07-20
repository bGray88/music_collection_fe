import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import AlbumList from '../../Albums/AlbumList/AlbumList'
import Card from "../../Window/Card/Card";
// import Loading from "../Loading/Loading";

import './Dashboard.css'

const Dashboard = ({id, setCurrentUser, setUserName}) => {
    const [userListings, setListings] = useState([])
    const [user, setUser] = useState({})
    const [userFilter, setUserFilter] = useState('')
    const [user_albums, setUserAlbums] = useState([]);

    const loadAlbums = () => {
      axios
        .get("/api/v1/albums")
        // get user albums based on ID
        .then((res) => {
          setUserAlbums(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  
    useEffect(() => {
      loadAlbums();
    }, [])

    return (
      <Card className='albums'>
        <AlbumList items={user_albums} />
      </Card>
    );
}

export default Dashboard