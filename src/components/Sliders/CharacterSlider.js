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
        <h2>Meet The Cast</h2>
        <Link to="/characters" className={styles.viewAll}>View All</Link>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {characters.map(character => (
            <div key={character.id} className={styles.slideItem}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <Link to={`/${character.id}`}>
                    <div className={styles.imageContainer}>
                      <img src={character.image} alt={character.name} />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{character.name}</h3>
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

export default CharacterSlider;