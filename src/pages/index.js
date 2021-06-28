import { Link ,graphql} from "gatsby"
import React from "react"
import Layout from "../components/Layout"
// import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"



export default function Home({data}) {
  console.log(data)

  return (
    <Layout>
  <section className="header">
      <div>
        <h2 >Design</h2>
        <h3>Develop & deploy</h3>
        <p>UI designer and web developer based in Ghana</p>
        <Link className="btn " to='/projects'>My portfolio</Link>
    </div>
    {/* <StaticImage src="../images/banner.png" alt="A dinosaur" /> */}
    <Img fluid={data.file.childImageSharp.fluid} />
  </section>
  </Layout>
  )
}

export const query = graphql`
query Pic {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;