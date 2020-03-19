import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Responsivecart from '../components/cart/ResponsiveCart'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="ISCRIPTIO EXPERTS IN WEB DESIGN AND DEVELOPMENT"
      subtitle="WE DESIGN.YOU CUSTOMIZE"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Responsivecart products={data.products} />
    <Dualinfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql`
         {
           img: file(relativePath: { eq: "heromain.png" }) {
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


export default IndexPage
