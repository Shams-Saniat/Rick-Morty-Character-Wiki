import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

function Cards({ results, page }) {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-white"
        >
          <div className={styles.cardWrapper}>
            <div className={styles.cardInner}>
              <div className={styles.imageContainer}>
                <img src={image} alt={name} className="img-fluid" />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.characterName}>{name}</div>
                <div className={styles.locationInfo}>
                  <div className={styles.locationLabel}>Last location</div>
                  <div className={styles.locationName}>{location.name}</div>
                </div>
              </div>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div className={`${styles.badge} ${styles.badgeDead} position-absolute badge`}>
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className={`${styles.badge} ${styles.badgeAlive} position-absolute badge`}>
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className={`${styles.badge} ${styles.badgeUnknown} position-absolute badge`}>
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters found";
  }
  return <>{display}</>;
}

export default Cards;