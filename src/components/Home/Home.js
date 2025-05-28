import React from 'react';
import CharacterSlider from '../Sliders/CharacterSlider';
import EpisodeSlider from '../Sliders/EpisodeSlider';
import LocationSlider from '../Sliders/LocationSlider';
import styles from './Home.module.scss';

// Import the assets
import logo from '../../assets/Logo.png';
import spaceship from '../../assets/bubble.png';

const Home = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <div className={styles.hero}>
        {/* Logo at the top */}
        <img src={logo} alt="Rick and Morty Logo" className={styles.logo} />

        {/* Hero Text with Portal Integration */}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <div className={styles.firstRow}>
              <img src={spaceship} alt="Spaceship" className={styles.spaceship} />
              <span className="fst-italic">The</span>{' '}
              <span className={styles.gradientText}>Rick</span>{' '}
              <span className={styles.gradientText}>&</span>
            </div>
            <div className={styles.secondRow}>
              <span className={styles.gradientText}>Morty</span>{' '}
              <span className="fst-italic">Wiki</span>
            </div>
          </h1>
        </div>

        {/* Tagline and Button */}
        <div className={`d-flex align-items-center ${styles.taglineContainer}`}>
          <button className={styles.watchButton}>Watch Now</button>
          <p className={styles.tagline}>
            Brilliant but boozy scientist Rick hijacks his fretful <br /> teenage grandson, Morty, for wild escapades <br /> in other worlds and alternate dimensions.
          </p>
          
        </div>
      </div>

      {/* Sliders */}
      <CharacterSlider />
      <EpisodeSlider />
      <LocationSlider />
    </div>
  );
};

export default Home;