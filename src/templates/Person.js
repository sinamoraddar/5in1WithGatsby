import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const person = data.allSitePage.edges[0].node.context
  return (
    <Layout>
      <h1 style={{ color: "cyan" }}>{person.name}</h1>
      this is the person template
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
          }
        }
      }
    }
  }
`
