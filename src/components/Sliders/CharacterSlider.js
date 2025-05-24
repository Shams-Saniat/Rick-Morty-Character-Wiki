import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';

const CharacterSlider = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results.slice(0, 10));
    };
    fetchCharacters();
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
      <h2>Meet The Cast</h2>
      <Link to="/characters" className={styles.viewAll}>View All</Link>
      <Slider {...settings}>
        {characters.map(character => (
          <div key={character.id} className={styles.card}>
            <Link to={`/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CharacterSlider;