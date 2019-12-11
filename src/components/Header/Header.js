import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
import Menu from "../Menu/Menu"
import styles from "./Header.module.scss"

const Header = ({ siteTitle }) => {
  const [isSideBarHidden, setIsSideBarHidden] = useState(null)
  return (
    <React.Fragment>
      <header
        className={`${styles.header} ${isSideBarHidden !== null &&
          (isSideBarHidden ? styles.disappear : styles.appear)}`}
      >
        <div className={styles.container}>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <Menu />
        </div>
      </header>
      <button
        className={styles.button}
        onClick={() =>
          setIsSideBarHidden(isSideBarHidden => {
            if (isSideBarHidden === null) {
              return false
            } else return !isSideBarHidden
          })
        }
      >
        {isSideBarHidden === null || false ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </button>
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
