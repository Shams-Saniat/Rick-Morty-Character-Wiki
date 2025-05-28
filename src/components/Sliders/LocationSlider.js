import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';

const LocationSlider = () => {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/location');
      const data = await response.json();
      setLocations(data.results.slice(0, 10));
    };
    fetchLocations();
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
      { 
        breakpoint: 1200, 
        settings: { 
          slidesToShow: 4,
          slidesToScroll: 1,
        } 
      },
      { 
        breakpoint: 992, 
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
        } 
      },
      { 
        breakpoint: 576, 
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
        } 
      }
    ]
  };
  
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <h2>Locations</h2>
        <Link to="/location" className={styles.viewAll}>View All</Link>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {locations.map(location => (
            <div key={location.id} className={styles.slideItem}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <Link to={`/location/${location.id}`}>
                    <div>
                      <h3>{location.name}</h3>
                      <p>{location.type}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LocationSlider;