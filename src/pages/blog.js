import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Blog from "../components/Blog/Blog"

import { graphql, Link } from "gatsby"
export default ({ data }) => {
  const { allPersonsJson, allProjectsJson } = data
  console.log(allPersonsJson, allProjectsJson)
  return (
    <Layout>
      <Seo title="my first blog made with gatsby" />
      <Blog />
      {allPersonsJson.nodes.map(person => (
        <Link to={"debuildex/persons/" + person.name} key={person.name}>
          {person.name}
        </Link>
      ))}
      {allProjectsJson.nodes.map(peroject => (
        <Link to={"debuildex/projects/" + peroject.name} key={peroject.name}>
          {peroject.name}
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allProjectsJson {
      nodes {
        name
      }
    }
    allPersonsJson {
      nodes {
        name
      }
    }
  }
`
