import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

import Loading from "../../components/ui/loading/loading";
import Message from "../../components/ui/message/message";
import AlbumList from '../../components/albums/albumList/albumList'
import Card from "../../components/ui/card/card";

import './dashboard.css'
import { albumOwnedIndexApi } from "../../api/albums/albumsApi";

const Dashboard = ({id, setCurrentUser, setUserName}) => {
    const [user_albums, setUserAlbums] = useState([]);
    const [loginMessage, setLoginMessage] = useState('');
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
      albumOwnedIndexApi(setUserAlbums, setLoading);
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