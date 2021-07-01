import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import  '../styles/pro.css'

export default function prodetails({data}) {
    const {html} = data.markdownRemark
    const {title,stack,featImg} = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className="deet">
                <h2>title</h2>
                <h3>stack</h3>
                <div classNames="feat">
                    <Img fluid={featImg.childImageSharp.fluid}/>
                </div>
                <div className="html" dangerouslySetInnerHTML={{ __html: html}}/>
            
            </div>
        </Layout>
    )
}


export const query =graphql`
query Page($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

`