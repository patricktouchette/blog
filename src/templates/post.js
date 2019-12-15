import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Header from "../components/header"
import Img from "gatsby-image"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div>
      <Header siteTitle={"Markdown Blog"} />

      <div style={{ padding: "2rem 5rem" }}>
        <h1>{post.frontmatter.title}</h1>
        <Img
          style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
          fluid={featuredImgFluid}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
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
`
