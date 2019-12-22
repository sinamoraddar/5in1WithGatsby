import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
import Menu from "../NavigationMenu/NavigationMenu"
import styles from "./SideBar.module.scss"

const SideBar = ({ siteTitle }) => {
  const [isSideBarHidden, setIsSideBarHidden] = useState(null)
  return (
    <React.Fragment>
      <aside
        className={`${styles.header} ${isSideBarHidden !== null &&
          (isSideBarHidden ? styles.disappear : styles.appear)}`}
      >
        <div className={styles.container}>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <Menu />
        </div>
      </aside>
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
        {isSideBarHidden === false ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </React.Fragment>
  )
}
SideBar.propTypes = {
  siteTitle: PropTypes.string,
}

SideBar.defaultProps = {
  siteTitle: ``,
}

export default SideBar
