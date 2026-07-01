import React from "react";
import styles from "./hero.module.css";
import img from "../assets/hero.png";
const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      {/* Hintergrund-Dekoration */}
      <div className={styles.backgroundGlow}></div>

      <div className={styles.heroContent}>
        {/* Linke Spalte: Text-Inhalt */}
        <div className={styles.textColumn}>
          <span className={styles.badge}>Neu: Version 2.0 ist da</span>

          <h1 className={styles.title}>
            Bauen Sie die Zukunft <br />
            <span className={styles.gradientText}>
              Ihrer digitalen Produkte
            </span>
          </h1>
          <p className={styles.description}>
            Erstellen Sie blitzschnelle, responsive und barrierefreie
            Benutzeroberflächen mit React. Sparen Sie Zeit und optimieren Sie
            Ihren Workflow.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#get-started" className={styles.primaryButton}>
              Jetzt starten
            </a>
            <a href="#docs" className={styles.secondaryButton}>
              Dokumentation
            </a>
          </div>
        </div>
        <figure className={styles.imageColumn}>
          <img src={img} alt="Hero Image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
