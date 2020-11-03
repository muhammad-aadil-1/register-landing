import React from "react"
// import { Link } from "gatsby"
import { Link } from "gatsby"
import {FormLabel} from 'react-bootstrap';
import { useSelector } from "react-redux";
import Breadcrumb from "react-bootstrap/Breadcrumb"
import { trans } from "../../constants";

const Banner = ({ heading = [], buttons = [], banner_image = {} }) => {
  const language = useSelector((state) => state.language);

  let p_heading = ""
  if (heading && heading[0]) p_heading = heading[0].text
  return (
    <>
      <section
        className="topBanner breadCrumbBanner"
        style={{ height: "" }}
      >
        <div
          className="bg_image_holder"
          style={{ backgroundImage: `url(${banner_image.url})`, opacity: 1 }}
        >
          <img src={banner_image.url} alt="" />
        </div>
        <div className="container content_above">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex flex-column align-items-center">
                <h3 className="page_title">{p_heading}</h3>

                {/* <Breadcrumb>
                  <li className="breadcrumb-item">
                    <Link to={"/"}>{trans('home', language)}</Link>
                  </li>
                  <Breadcrumb.Item active>{p_heading}</Breadcrumb.Item>
                </Breadcrumb> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
