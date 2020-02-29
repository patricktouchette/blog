import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      fields {
        slug
      }
    }
  }
`
