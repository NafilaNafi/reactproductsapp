import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
      <section className="bg-theme my-5 py-4">
        <div className="container">
          <Heading title={heading} />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-white mb-4">
                Iscriptio Technologies is a Startup organization in
                providing a full spectrum of IT Solutions for all Enterprise &
                Industry scale right from small to large sized businesses. As an
                emerging technology provider, we are focused on providing every
                solution blending with the right expertise, client’s needs and,
                market trends. We have built a multidisciplinary portfolio of
                working with diverse Industry of different tiers. Our highly
                talented and passionate team are experts in the areas of
                software and application development that includes the portal
                development in the e-commerce market, Web-based Application
                development, Web development, and Mobile App development.
                Combining our vast experience and skills, we strive to
                relinquish cost-effective and tangible solutions in the simplest
                form taking care of our client’s every requirement.The following
                are some of the Industries we have served, Health & Fitness,
                Shopping & E-commerce, Media & Entertainment, Hospitality &
                Tourism, Banking & Finance, Automobile Industries, Government,
                Shipping & Logistics with our unmatchable software development
                solutions.We handle all our client's project in a meticulous
                manner right from gathering requirements, researching,
                designing, developing, to the final handover that blends with
                Industry flair practices.
              </p>
              <Link to="/about/">
                <button className="btn btn-warning btn-lg">{heading}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}
