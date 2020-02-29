import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark

  const posts = edges.map(edge => {
    const { frontmatter, excerpt, fields } = edge.node
    return (
      <li key={frontmatter.title} className="post">
        <Link to={`/blog/${fields.slug}`}>
          <h2>{frontmatter.title}</h2>
        </Link>
        <p className="date">{frontmatter.date}</p>
        <p>{excerpt}</p>
        <Link to={`/blog/${fields.slug}`}>See more...</Link>
      </li>
    )
  })

  return (
    <div className="blog-page">
      <Layout>
        <h1>Blog</h1>
        <ul>{posts}</ul>
        <p>
          Go back <Link to="/">home</Link>
        </p>
      </Layout>
    </div>
  )
}

export default BlogPage
