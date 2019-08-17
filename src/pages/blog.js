import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      Blog page <Link to="/"> Back Home</Link>
      <h1>title : {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`

export default blog
