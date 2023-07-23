import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

import Message from "../../Components/Window/Message/Message";
import AlbumList from '../../Components/Albums/AlbumList/AlbumList'
import Card from "../../Components/Window/Card/Card";

import './Dashboard.css'

const Dashboard = ({id, setCurrentUser, setUserName}) => {
    const [user_albums, setUserAlbums] = useState([]);
    const [loginMessage, setLoginMessage] = useState('');

    const loadAlbums = async () => {
      await axios
        .get("/api/v1/albums")
        // get user albums based on ID
        .then((res) => {
          setUserAlbums(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  
    useEffect(() => {
      loadAlbums();
      setLoginMessage(<Message message={`Welcome ${Cookies.get("user_name")}`} />);
    }, [])

    return (
      <div className="dashboard-main">
        {loginMessage}
        <Card className='albums'>
          <AlbumList items={user_albums} />
        </Card>
      </div>
    );
}

export default Dashboard