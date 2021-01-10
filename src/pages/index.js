import React from "react"
import { graphql,Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
 text-decoration : none;
`
const BlogTitle = styled.h3`
margin-bottom : 30px;
color : blue`

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Tanish Thoughts</h1>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
          <BlogLink to={node.fields.slug}>  
          <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle> 
          </BlogLink>
          <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>

  </Layout>
)

export const query = graphql`
query  {
  allMarkdownRemark(sort : { fields : [frontmatter___date],order : DESC }) {
    edges {
      node {
        frontmatter {
          date
          description
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
} `