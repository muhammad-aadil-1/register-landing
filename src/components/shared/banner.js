import React from "react"
// import { Link } from "gatsby"

import { Button } from "react-bootstrap"

const Banner = ({ heading = [], buttons = [], banner_image = {}, showButtons= true }) => {
  let p_heading = ""
  if (heading && heading[0]) p_heading = heading[0].text
  return (
    <>
      <section className="topBanner">
        <div
          className="bg_image_holder"
          style={{ backgroundImage: `url(${banner_image.url})`, opacity: 1 }}
        >
          <img src={banner_image.url} alt="banner" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex flex-column align-items-center">
                <h3 className="page_title">{p_heading}</h3>
                {showButtons ===  true &&
                <div className="action-btns m-top-35">
                {/* <ul className="d-flex" style={{ paddingBottom: "2rem" }}>
                  {buttons.map((button, index) => (
                    <li key={'list-key'+index}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={button.button_link[0]?button.button_link[0].text: ''}
                        className="anchor"
                      >
                        <Button
                          style={{
                            backgroundColor: button.button_color,
                            color: "#fff",
                          }}
                        >
                          {button.button_value[0]?button.button_value[0].text:''}
                        </Button>
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
