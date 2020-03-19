import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Teamservice from "../components/Service/Teamservice"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroclass="service-background"
    />
    <Infoblock heading="About Our Services" />
    <Teamservice />
    <Dualinfoblock heading="Why We Are?" />
   
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "service.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    products: allContentfulResponsive {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ServicePage
