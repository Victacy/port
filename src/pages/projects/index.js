import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.pro.nodes
  const contact = data.cont.siteMetadata.contact

  return (
    <Layout>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className="projects">
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Interested to see more? Email me at {contact} for more details</p>
      </div>
    </Layout>
  );
}
 

export default Projects

// export page query
export const query = graphql`
query ProjectsPage {
  pro: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  cont: site {
    siteMetadata {
      contact
    }
  }
}
`