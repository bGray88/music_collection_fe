import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '../card/card';
import Next from '../../../assets/images/carousel/chevronDown.png';
import Prev from '../../../assets/images/carousel/chevronUp.png';
import './verticalCarousel.css';

const VerticalCarousel = ({
	data,
	leadingText,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
  const halfwayIndex = Math.ceil(data.length / 2);
  const itemHeight = 52;
  const shuffleThreshold = halfwayIndex * itemHeight;
  const visibleStyleThreshold = shuffleThreshold / 2;

	const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }
      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }
      return prevIndex - 1;
    });
  }

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;
    if (itemIndex >= halfwayIndex) {
      if (activeIndex > (itemIndex - halfwayIndex)) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -((data.length + activeIndex) - itemIndex) * itemHeight;
      }
    }
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }
    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  if (data.length === 0) {
    return (
      <Card className="carousel">
        <div className="carousel-wrapper">
          <div className="content">
            <div className="slides">
              <div className="carousel-inner">
                <h2 className="album-list__fallback">Found No Albums</h2>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
  return (
    <Card className="carousel">
      <div className="carousel-wrapper">
        <div className="content">
          <img
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
            height={300}
          />
          <a href={`https://open.spotify.com/album/${data[activeIndex].id}`}>Spotify</a>
        </div>
        <div className="leading-text">
          <p>{leadingText}</p>
        </div>
        <div className="carousel">
          <div className="slides">
            <button
              type="button"
              className="carousel-button prev"
              onClick={() => handleClick('prev')}
            >
              <img src={Prev} alt={Prev} height={25} />
            </button>
            <button
              type="button"
              className="carousel-button next"
              onClick={() => handleClick('next')}
            >
              <img src={Next} alt={Next} height={25} />
            </button>
          </div>
          <div className="carousel-inner">
            {data.map((item, i) => (
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={classNames('carousel-item', {
                  active: activeIndex === i,
                  visible: Math.abs(determinePlacement(i)) <= visibleStyleThreshold,
                })}
                key={item.id}
                style={{ transform: `translateY(${determinePlacement(i)}px)` }}
              >
              <div className='carousel-item-intro'>
                {
                  (item.introline.split(' ').length > 2)
                    ? item.introline.split(' ').slice(0, 2).join(' ').concat('...')
                    : item.introline.split(' ').slice(0, 2).join(' ')
                }
              </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired,
};

export default VerticalCarousel;