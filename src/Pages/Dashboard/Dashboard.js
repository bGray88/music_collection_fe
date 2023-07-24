import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

import Message from "../../components/ui/message/message";
import AlbumList from '../../components/albums/albumList/albumList'
import Card from "../../components/ui/card/card";

import './dashboard.css'

const Dashboard = ({id, setCurrentUser, setUserName}) => {
    const [user_albums, setUserAlbums] = useState([]);
    const [loginMessage, setLoginMessage] = useState('');

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