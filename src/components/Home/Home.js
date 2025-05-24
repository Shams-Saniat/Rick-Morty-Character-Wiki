import React from 'react';
import CharacterSlider from '../Sliders/CharacterSlider';
import EpisodeSlider from '../Sliders/EpisodeSlider';
import LocationSlider from '../Sliders/LocationSlider';
import styles from './Home.module.scss';
const Home = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>
          The Rick <span className={styles.amp}>&</span> Morty Wiki
        </h1>
        <p className={styles.tagline}>
          Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.
        </p>
        <button className={styles.watchButton}>Watch Now</button>
      </div>

      {/* Sliders */}
      <CharacterSlider />
      <EpisodeSlider />
      <LocationSlider />
    </div>
  );
};

export default Home;