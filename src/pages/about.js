import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Teamservice from "../components/About/Teamservice"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Iscriptio"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock heading="Why We Are" />
    <Infoblock heading="About Vision" />
    <Teamservice />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
