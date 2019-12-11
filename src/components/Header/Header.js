import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
import Menu from "../Menu/Menu"
import styles from "./Header.module.scss"

const Header = ({ siteTitle }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  return (
    <React.Fragment>
      {isSideBarOpen ? (
        <header
          className={`${styles.header} ${
            isSideBarOpen ? styles.open : styles.close
          }`}
        >
          <button
            className={styles.button}
            onClick={() => setIsSideBarOpen(isSideBarOpen => !isSideBarOpen)}
          >
            {isSideBarOpen ? <FontAwesomeIcon icon={faTimes} /> : "open"}
          </button>
          <div>
            <h1>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            <Menu />
          </div>
        </header>
      ) : (
        <button
          className={styles.button}
          onClick={() => setIsSideBarOpen(isSideBarOpen => !isSideBarOpen)}
        >
          {isSideBarOpen ? (
            <FontAwesomeIcon icon="coffee" />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      )}
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
