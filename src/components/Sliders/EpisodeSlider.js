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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Episodes</h2>
      <Link to="/episodes" className={styles.viewAll}>View All</Link>
      <Slider {...settings}>
        {episodes.map(episode => (
          <div key={episode.id} className={styles.card}>
            <Link to={`/episodes/${episode.id}`}>
              <h3>{episode.name}</h3>
              <p>{episode.episode}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EpisodeSlider;