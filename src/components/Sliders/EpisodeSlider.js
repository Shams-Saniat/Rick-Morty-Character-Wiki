import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';

const EpisodeSlider = () => {
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      setEpisodes(data.results.slice(0, 10));
    };
    fetchEpisodes();
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
        <h2>Episodes</h2>
        <Link to="/episodes" className={styles.viewAll}>View All</Link>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {episodes.map(episode => (
            <div key={episode.id} className={styles.slideItem}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <Link to={`/episodes/${episode.id}`}>
                    <div>
                      <div>{episode.episode}</div>
                      <h3>{episode.name}</h3>
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

export default EpisodeSlider;