import React from "react"
import Layout from "../../components/Layout/Layout"
// import ItemsList from "../../components/ItemsList/ItemsList"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import styles from "./table.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>TechStack</th>
          </tr>
        </thead>
        <tbody>
          {data.allProjectsJson.nodes.map(({ name, techStack }) => (
            <Link key={name} to={`debuildex/projects/${name}`}>
              <td>{name}</td>
              <td>{techStack.join(" , ")}</td>
            </Link>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      nodes {
        name
        techStack
      }
    }
  }
`
