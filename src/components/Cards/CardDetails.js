import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './CardDetails.module.scss';

const CardDetails = () => {
  let { id } = useParams();
  let [fetchData, updateFetchData] = useState({});
  let [episodeNames, setEpisodeNames] = useState([]);
  let { name, image, location, origin, gender, species, status, episode } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);

      // Fetch episode names
      if (data.episode) {
        let episodePromises = data.episode.map(epUrl => fetch(epUrl).then(res => res.json()));
        let episodesData = await Promise.all(episodePromises);
        setEpisodeNames(episodesData.map(ep => ep.name));
      }
    })();
  }, [api]);

  return (
    <div className={styles.cardDetailsContainer}>
      <div className={styles.cardDetailsWrapper}>
        <div className={styles.cardDetailsInner}>
          <div className={styles.profileSection}>
            <div className={styles.characterImage}>
              <img src={image} alt={name} />
            </div>
            <div className={styles.nameAndStatus}>
              <h1 className={styles.characterName}>{name}</h1>
              <div className={`${styles.badge} ${status === 'Dead' ? styles.badgeDead : status === 'Alive' ? styles.badgeAlive : styles.badgeUnknown}`}>
                {status}
              </div>
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.detailsContent}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Species:</span>
                <span className={styles.value}>{species}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Gender:</span>
                <span className={styles.value}>{gender}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Origin:</span>
                <span className={styles.value}>{origin?.name}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Last known Location:</span>
                <span className={styles.value}>{location?.name}</span>
              </div>
              <div className={`${styles.detailItem} ${styles.episodes}`}>
                <span className={styles.label}>Episodes:</span>
                <ul className={styles.episodeList}>
                  {episodeNames.map((ep, index) => (
                    <li key={index} className={styles.episodeItem}>{ep}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
