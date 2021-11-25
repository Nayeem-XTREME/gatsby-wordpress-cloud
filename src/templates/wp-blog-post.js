import React from "react"
import { graphql } from "gatsby"

export default function WpBlog({ data }) {
  const { title, content } = data.wpPost
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`
