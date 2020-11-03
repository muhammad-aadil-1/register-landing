import React from "react"
// import { Link } from "gatsby"

// import { IMAGES } from '../../constants';

const Stats = ({ heading, items }) => {
  return (
    <>
      <section className="information-box p-top-140 p-bottom-60">
        <div className="information-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-lg-2 border-0">
                  <div className="card-header">
                    <h5 className="m-bottom-0"> {heading[0].text} </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {items.map(item => (
                        <div className="col-lg-4 mb-5">
                          <div className="d-flex">
                            <span>
                              <i className={item.stat_icon[0].text}></i>{" "}
                              {item.stat_title[0].text} :{" "}
                            </span>
                            <span> {item.stat_value[0].text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stats
