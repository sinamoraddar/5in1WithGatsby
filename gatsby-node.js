/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/blog-post.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }
const path = require("path")
const personsFile = require("./src/data/persons.json")
const projectsFile = require("./src/data/projects.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const personTemplate = path.resolve("./src/templates/Person.js")
  const projectTemplate = path.resolve("./src/templates/Project.js")

  personsFile.forEach(person => {
    const path = `persons/${person.name}`
    createPage({
      path,
      component: personTemplate,
      context: person,
    })
  })
  projectsFile.forEach(project => {
    const path = `projects/${project.name}`
    createPage({
      path,
      component: projectTemplate,
      context: project,
    })
  })
}
