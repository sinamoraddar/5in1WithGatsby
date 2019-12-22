import React from "react"
import PropTypes from "prop-types"
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

Card.propTypes = {
  color: PropTypes.number,
}

export default Card
