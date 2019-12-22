import React from "react"
import { Link } from "gatsby"
import styles from "./Index.module.scss"
import Menu from "../NavigationMenu/NavigationMenu"

const Index = () => {
  return (
    <main className={styles.index}>
      <h1>Welcome to the 5in1 with Gatsby</h1>
      <p>
        these are my solutions to the challenges provided by
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontEndMentor.io
        </a>
      </p>
      {/* <ul className={styles.linkContainer}> */}
      <Menu />
      {/* </ul> */}
    </main>
  )
}

export default Index
