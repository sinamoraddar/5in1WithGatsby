import React from "react"
import { Link } from "gatsby"

import styles from "./Menu.module.scss"
const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link to="/fourcardsection/">4 Card Feature Section</Link>
      <Link to="/baseapparel/">Base Apparel</Link>
      <Link to="/pricing/">Pricing</Link>
      <Link to="/projecttracking/">project tracking</Link>
      <Link to="/signup/">sign up</Link>
    </nav>
  )
}

export default Menu
