import React from 'react';

import Card from '../../Card/Card/Card';

import './AlbumItem.css'

const AlbumItem = (props) => {
  console.log(props)
  return (
    <li>
      <Card className='album-item'>
        <span className="album-item_remove-Button">x</span>
        <div className='album-item__description'>
          <h2 className="album-item__title">
            <input className="album-item_checkbox" type="checkbox" />
            {props.title}
          </h2>
          <div className="album-item__year">{props.release_year}</div>
          <div className="album-item__genre">{props.genre}</div>
        </div>
      </Card>
    </li>
  );
}

export default AlbumItem;