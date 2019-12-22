import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

export default () => {
  return (
    <Layout>
      <div>
        <Link to="debuildex/projects">projects</Link>
        <Link to="debuildex/persons">persons</Link>
      </div>
    </Layout>
  )
}
