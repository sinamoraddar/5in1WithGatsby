import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      the blog goes here
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}

export default Blog
