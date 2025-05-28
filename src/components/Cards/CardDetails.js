import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './CardDetails.module.scss';

const CardDetails = () => {
  let { id } = useParams();
  let [fetchData, updateFetchData] = useState({});
  let { name, image, location, origin, gender, species, status, type } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className={styles.cardDetailsContainer}>
      <div className={styles.cardDetailsWrapper}>
        <div className={styles.cardDetailsInner}>
          <div className={styles.characterImage}>
            <img src={image} alt={name} />
          </div>
          <h1 className={styles.characterName}>{name}</h1>
          <div className={`${styles.badge} ${styles.badgeAlive} ${status === 'Dead' ? styles.badgeDead : status === 'Alive' ? styles.badgeAlive : styles.badgeUnknown}`}>
            {status}
          </div>
          <div className={styles.detailsContent}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Gender:</span>
              <span className={styles.value}>{gender}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Species:</span>
              <span className={styles.value}>{species}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Type:</span>
              <span className={styles.value}>{type === "" ? "Unknown" : type}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Location:</span>
              <span className={styles.value}>{location?.name}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Origin:</span>
              <span className={styles.value}>{origin?.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;