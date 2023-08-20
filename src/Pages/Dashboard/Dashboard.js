import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

import Loading from "../../Components/UI/Loading/Loading";
import Message from "../../Components/UI/Message/Message";
import AlbumList from '../../Components/Albums/AlbumList/AlbumList'
import Card from "../../Components/UI/Card/Card";

import './Dashboard.css'
import { userAlbumOwnedIndexApi } from "../../API/UserAlbums/UserAlbumsApi";

const Dashboard = () => {
    const [user_albums, setUserAlbums] = useState([]);
    const [loginMessage, setLoginMessage] = useState('');
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
      userAlbumOwnedIndexApi(setUserAlbums, setLoading);
      setLoginMessage(<Message message={`Welcome ${Cookies.get("user_name")}`} />);
    }, [])

    if (isLoading) {
      return (
        <div className='create-loading'>
          <h2>Processing...</h2>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="dashboard-main">
          {loginMessage}
          <Card className='albums'>
            <AlbumList items={user_albums} />
          </Card>
        </div>
      );
    }
}

export default Dashboard