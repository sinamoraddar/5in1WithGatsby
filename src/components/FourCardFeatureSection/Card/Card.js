import React from "react"
import styles from "./Card.module.scss"
const Card = ({ color, image, title, description }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.text}>
        <h2>{title}</h2>
        {description}
      </div>
      <embed className={styles.logo} src={image} />
    </div>
  )
}

export default Card
