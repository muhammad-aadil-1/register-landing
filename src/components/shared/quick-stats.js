import React from "react"
// import { Link } from "gatsby"

import { Card } from "react-bootstrap"

const Stats = ({ heading = [], items = [] }) => {
  return (
    <>
      <section className="quickStats">
        <div className="information-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Card>
                  <Card.Header as="h5">{heading[0]?heading[0].text:''}</Card.Header>
                  <Card.Body>
                    <Card.Text className="row"  as={Card.Body}>
                      {items.map((item, index) => (
                        <div className="col-lg-4" key={'stats-'+index}>
                          <ul className="quick-stats">
                            <li className="d-flex">
                              <span className="iconLabel">
                                <i
                                  className={
                                    "statIcon " + item.stat_icon[0]?item.stat_icon[0].text: ''
                                  }
                                ></i>
                                {item.stat_title[0]?item.stat_title[0].text:''} :
                              </span>
                              <span> {item.stat_value[0]?item.stat_value[0].text:''}</span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </section>
    </>
  )
}

export default Stats
