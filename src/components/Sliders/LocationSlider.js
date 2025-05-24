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
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0px', // Remove default padding on the sides
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: '0px' } },
      { breakpoint: 600, settings: { slidesToShow: 2, centerPadding: '0px' } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: '0px' } }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Locations</h2>
      <Link to="/location" className={styles.viewAll}>View All</Link>
      <Slider {...settings}>
        {locations.map(location => (
          <div key={location.id} className={styles.card}>
            <Link to={`/location/${location.id}`}>
              <h3>{location.name}</h3>
              <p>{location.type}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LocationSlider;