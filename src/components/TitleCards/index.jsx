import React from "react";
import { useNavigate } from "react-router-dom";
import cards_data from "../../assets/cards/Cards_data";
import styles from "./index.module.css";

const TitleCards = ({title, movieList}) => {
  const navigate = useNavigate();
  
  const [apiData, setApiData] = React.useState([]);

  const url = `https://api.themoviedb.org/3/movie/${movieList? movieList : "now_playing"}?language=en-US&page=1`;
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
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

  }, []);

  return (
    <div className={styles.titleCards}>
        <h2>{title? title : "Popular on Netflix"}</h2>
        <ul className={styles.cardList}>
            {apiData.map((card, index) => {
                return <li className={styles.card} key={index} onClick={() => {
                  navigate(`/player/${card.id}`);
                }}>
                    <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} alt="" />
                    <p>{card.title}</p>
                </li>
            })}
        </ul>
    </div>
  )
}

export default TitleCards