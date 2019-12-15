import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

import "./index.scss"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(post => {
    const { id } = post.node
    const { title, path, featuredImage } = post.node.frontmatter
    let featuredImgFluid = featuredImage.childImageSharp.fluid

    return (
      <div
        className="Post"
        key={id}
        style={{ margin: "2rem", padding: "2rem", border: "1px solid grey" }}
      >
        <h2>{title}</h2>
        <p>{id}</p>
        <Img
          style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}
          fluid={featuredImgFluid}
        />
        <Link to={path}>See More</Link>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>

      {posts}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
