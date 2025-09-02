import React from 'react';
import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import TitleCards from "../../components/TitleCards";
import Footer from "../../components/Footer";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
      <img src={hero_banner} alt="" className={styles.bannerImg} />
      <div className={styles.heroCaption}>
        <img src={hero_title} alt="" className={styles.captionImg} />
        <p className={styles.captionText}>Discovering his ties to a secret order, a young man living in modern Istanbul embark on a quest to save the city from an immortal enemy.</p>

        <div className="buttons">
          <button className={styles.btn}><img src={play_icon} alt="" />Play</button>
          <button className={`${styles.btn} ${styles.darkBtn}`}><img src={info_icon} alt="" />More Info</button>
        </div>
        <TitleCards />
      </div>
      </div>

      <div className={styles.moreCards}>
        <TitleCards title="Blockbuster Movies" />
        <TitleCards title="Only on Netflix" />
        <TitleCards title="Upcoming" />
        <TitleCards title="Top Picks for You" />
      </div>

      <Footer />
    </div>
  )
}

export default Home