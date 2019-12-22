import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "./NavigationMenu.module.scss"
const Menu = () => {
  const {
    allFile: { nodes: pages },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "pages" } }) {
        nodes {
          name
          relativeDirectory
        }
      }
    }
  `)
  return (
    <nav className={styles.menu}>
      {/* <Link to="/fourcardsection/">4 Card Feature Section</Link>
      <Link to="/baseapparel/">Base Apparel</Link>
      <Link to="/pricing/">Pricing</Link>
      <Link to="/projecttracking/">project tracking</Link>
      <Link to="/signup/">sign up</Link>
      <Link to="/blog/">blog</Link> */}
      {pages.map(({ name }) => {
        switch (name) {
          case "index":
          case "404":
            return
          default:
            return <Link to={`/${name}/`}>{name}</Link>
        }
      })}
    </nav>
  )
}

export default Menu
