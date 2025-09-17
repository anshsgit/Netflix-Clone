import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import backArrowIcon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = React.useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzBjYTY3OWNjZjI4YmY1ZjQ0NmMwMmE2MDA0ZTc2MCIsIm5iZiI6MTc1Njc4OTk3OS43NTQsInN1YiI6IjY4YjY3Y2RiMzc4ODliOGM1NzFmMmNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.owsqMbCpoABS6tZAMPapchxRUifqLswYrTQv9aOiiNI'
    }
  };

  React.useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(res => { setApiData(res.results[0]); })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className={styles.player}>
      <img src={backArrowIcon} alt="back arrow icon" className={styles.arrowImage} onClick={() => {
        navigate("/")
      }} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameborder="0" allowFullScreen className={styles.embedScreen} ></iframe>
      <div className={styles.playerInfo}>
        <p>{apiData.published_at.split("").splice(0,10).join("")}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player