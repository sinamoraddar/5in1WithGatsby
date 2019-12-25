import React, { useState, useEffect } from "react"
import styles from "./BaseApparel.module.scss"
import heroMobile from "../../images/BaseApparel/hero-mobile.jpg"
import heroDesktop from "../../images/BaseApparel/hero-desktop.jpg"
import iconArrow from "../../images/BaseApparel/icon-arrow.svg"
import iconError from "../../images/BaseApparel/icon-error.svg"

import { Link } from "gatsby"

const onEmailInputChange = (setEmailField, { target: { value } }) => {
  setEmailField(value)
}

const onSubmit = (emailField, setErrorMessage, setSuccessMessage, e) => {
  e.preventDefault()
  if (!emailField) {
    setErrorMessage("Please provide a valid email")
  } else {
    const isEmailValid = emailField.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if (!isEmailValid) {
      setErrorMessage(
        "There is something wrong with the format of your email address"
      )
    } else {
      setSuccessMessage("Your request was submitted successfully")
    }
  }
}

export default () => {
  const [emailField, setEmailField] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  useEffect(() => {
    if (emailField) {
      setErrorMessage(null)
      setSuccessMessage(null)
    }
  }, [emailField])
  return (
    <section className={styles.container}>
      <div className={styles.baseApparel}>
        <div className={styles.imageContainer}></div>
        <div className={styles.textContainer}>
          <Link to="/baseapparel/" className={styles.link}></Link>
          <h1>
            <span>we're</span>coming soon
          </h1>
          <p>
            Hellow fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with annoncements and
            our launch deals.
          </p>
          <form className={errorMessage && styles.formErrorMessage}>
            <input
              type="email"
              placeholder="Email Address"
              value={emailField}
              onChange={onEmailInputChange.bind(undefined, setEmailField)}
            />
            {errorMessage && (
              <embed src={iconError} className={styles.errorIcon} />
            )}
            <button
              type="submit"
              onClick={onSubmit.bind(
                undefined,
                emailField,
                setErrorMessage,
                setSuccessMessage
              )}
            >
              <embed src={iconArrow} />
            </button>
          </form>
          {(errorMessage || successMessage) && (
            <p
              className={`${errorMessage &&
                styles.errorMessage} ${successMessage &&
                styles.successMessage}`}
            >
              {errorMessage || successMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
