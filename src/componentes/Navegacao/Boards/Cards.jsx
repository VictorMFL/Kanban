import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ title, description, hastag }) => {
  return (
    <div className={styles.areaCard}>
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <span className={styles.hastag}>{hastag}</span>
      </div>
    </div>
  );
};

export default Cards;
