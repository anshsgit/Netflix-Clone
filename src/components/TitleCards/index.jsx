import React from 'react'
import cards_data from "../../assets/cards/Cards_data";
import styles from "./index.module.css";

const TitleCards = ({title, category}) => {

  return (
    <div className={styles.titleCards}>
        <h2>{title? title : "Popular on Netflix"}</h2>
        <ul className={styles.cardList}>
            {cards_data.map((card, index) => {
                return <li className={styles.card} key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                </li>
            })}
        </ul>
    </div>
  )
}

export default TitleCards