import React from "react"
import { Link } from "gatsby"

import styles from "./Menu.module.scss"
const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link to="/fourcardfeaturesection/">Go to 4card feature section</Link>
      <Link to="/baseapparel/">Go to base apparel</Link>
      <Link to="/pricing/">Go to pricing</Link>
      <Link to="/projecttracking/">Go to project tracking</Link>
      <Link to="/signup/">Go to sign up</Link>
    </nav>
  )
}

export default Menu
