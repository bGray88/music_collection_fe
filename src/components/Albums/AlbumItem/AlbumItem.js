import React from 'react';

import Card from '../../UI/Card/Card';

import './AlbumItem.css'

const AlbumItem = (props) => {
  return (
    <li>
      <Card className='album-item'>
        <div className='album-item__left'>
          <div className='album-item__image'>
            <img src={props.image} alt={props.image} height={80} />
          </div>
          <div className='album-item__description'>
            <a className="album-item__title" href={`/album/${props.id}`}>
              {props.title}
            </a>
          </div>
        </div>
        <div className='album-item__right'>
          <div className='album-item__description-sub'>
            <h3>{props.release_year}</h3>
            <h3>{props.genre}</h3>
          </div>
          <button className="album-item_add-button" type="button">Add</button>
          <span className="album-item_remove-Button">x</span>
        </div>
      </Card>
    </li>
  );
}

export default AlbumItem;