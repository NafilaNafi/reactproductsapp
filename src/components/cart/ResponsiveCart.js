import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'
import { any } from 'prop-types';

const getCaty = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories
}


export default class ResponsiveCart extends Component {
    constructor(props) {
        super(props)
        this.state= {
            products:props.products.edges,
            myproducts:props.products.edges,
            mycategories: getCaty(props.products.edges)
        }
    }

  catyClicked = category => {
    let keepItsafe = [...this.state.products]

    if (category === 'all') {
      this.setState(() => {
        return { myproducts: keepItsafe}
      })
    } else {
      let holdme = keepItsafe.filter(({node}) => node.category === category)
      this.setState(() => {
        return { myproducts: holdme }
      })
    }
  }

    render() {
        // console.log(this.state.products)

        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="products" />
                    <div className="row my-3">
                    <div className="col-10 mx-auto text-center">
                      {this.state.mycategories.map((category, index) => {
                        return (
                          <button
                          type="button"
                          className="btn btn-info m-3 px-3"
                          key={index}
                          onClick={() => {
                            this.catyClicked(category)
                          }}
                          >
                            {category}
                          </button>
                        )
                      })

                      }
                    </div>
                    <div className="row">
                        {this.state.myproducts.map(({node}) => {
                            return (
                              <div
                                key={node.id}
                                className="col-11 col-md-6 d-flex my-5 mx-auto"
                              >
                                <Img fixed={node.image.fixed} />
                                <div className="flex-grow-1 px-3">
                                  <div className="d-flex ">
                                    <h6 className="mb-0">{node.title}</h6>
                                    <h6 className="mb-0 text-success">
                                      $$ {node.price}
                                    </h6>
                                  </div>
                                  <p className="text-muted">
                                    <small>
                                      {node.description.description}
                                    </small>
                                  </p>
                                  <button
                                    data-item-id={node.id}
                                    data-item-price={node.price}
                                    data-item-url="https://iscriptiotech.netlify.com/"
                                    data-item-image={node.image.fixed.src}
                                    data-item-name={node.title}
                                    className="btn btn-warning snipcart-add-item"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
