import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
      <section className="my-4 py-4 bg-theme">
        <div className="container">
          <Heading title={heading} />
          <div className="row">
            <div className="col-8 mx-auto">
              <p className="lead text-white mb-5">
                We start projects on-time and deliver it within deadline, as we
                have bunch of skilled professionals who are committed to their
                work. We keep client satisfaction as a goal and strive hard to
                achieve it. Our pricings are realistic & no hidden charges. We
                hold separate testing team who ensures the quality of projects.
                Well-experienced and professional team members who work with
                commitment. We handle complete digital marketing services
                starting for website designing to mobile app development. Hence
                you need not search for other service providers to do each and
                every piece of work for you. This saves your business time and
                money. We continue to assist you even after project completion,
                depending on your requirement. We create mobile-responsive and
                SEO friendly websites that meets the industrial standards. We
                handle business by joining hands with you so that we can build
                long-term relationships.
              </p>
            </div>
            <div className="col-4">
              <div className="card bg-dark">
                <img
                  src="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="card-img-top"
                  alt="image goes here"
                />
                <div className="card-body">
                  <h5 className="card-title text-success">Our Vision</h5>
                  <p className="card-text text-white">
                    Over the years of experience, we gained reputation in web
                    design services, seo services, web development and mobile
                    app development services. We take pride in saying that we
                    have completed more than 100+ projects till date.
                  </p>
                  <a href="#" className="btn btn-warning btn-block">
                    {heading}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
