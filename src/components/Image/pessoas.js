import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Pessoas = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "publico.png" }) {
          childImageSharp {
            fixed(width: 210, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default Pessoas
