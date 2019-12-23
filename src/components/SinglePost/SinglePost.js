import React from "react"
import styles from "./SinglePost.module.scss"

export default ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.singlePost}>
        <h1>{data.name}</h1>
        {Object.keys(data).map(
          datum =>
            datum !== "name" && (
              <p>
                <span>{datum}</span>:{data[datum]}
              </p>
            )
        )}
      </div>
    </div>
  )
}
