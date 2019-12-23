import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import SinglePost from "../components/SinglePost/SinglePost"

export default ({ data }) => {
  const person = data.allSitePage.edges[0].node.context
  console.log(person)
  return (
    <Layout>
      {/* <h1 style={{ color: "cyan" }}>{person.name}</h1> */}
      <SinglePost data={person} />
      {/* this is the persons template */}
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
            role
            description
          }
        }
      }
    }
  }
`
