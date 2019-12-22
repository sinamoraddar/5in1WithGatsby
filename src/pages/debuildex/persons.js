import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"
import styles from "./table.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Persons" />
      <h1>Persons</h1>
      <table className={styles.table} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th> <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.allPersonsJson.nodes.map(({ name, role }) => (
            <Link key={name} to={`debuildex/persons/${name}`}>
              <td>{name}</td>
              <td>{role}</td>
            </Link>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPersonsJson {
      nodes {
        name
        role
      }
    }
  }
`
