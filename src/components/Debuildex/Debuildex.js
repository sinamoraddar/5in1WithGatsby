import React from "react"
import { Link } from "gatsby"
import Card from "../FourCardFeatureSection/Card/Card"
import styles from "./Debuildex.module.scss"

export default () => {
  return (
    <main className={styles.debuildex}>
      <Link to="debuildex/projects">
        <Card
          color="red"
          title="Projects"
          description="a list of all of the projects that we've made so far"
        />
      </Link>
      <Link to="debuildex/persons">
        <Card
          color="blue"
          title="Persons"
          description="have a look at the members of our cool & experienced team"
        />
      </Link>
    </main>
  )
}
