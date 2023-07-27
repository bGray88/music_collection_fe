import React from 'react';

import Card from '../../ui/card/card';

import './albumItem.css'

const AlbumItem = (props) => {
  return (
    <li>
      <Card className='album-item'>
        <input className="album-item_checkbox" type="checkbox" />
        <div className='album-item__description'>
          <h2 className="album-item__title">{props.title}</h2>
          <div className='album-item__description-sub'>
            <img src={props.image} alt={props.image} height={40} />
            <h3>{props.release_year}</h3>
            <h3>{props.genre}</h3>
          </div>
        </div>
        <span className="album-item_remove-Button">x</span>
      </Card>
    </li>
  );
}

export default AlbumItem;