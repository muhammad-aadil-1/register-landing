import React, { useState } from "react"
import { Link } from "gatsby"
import { SERVICE_VIDEO } from "../../../constants/images";
const JoinAccuIndex = ({
  trading_box = [],
  trading_description = {},
  trading_icon = {},
  trading_title = {},
  application_links = [],

  wide_choice = {},
  wide_range_description = {},
  wide_range_features = [],
  wide_range_thumbnail = {},

  next_level = {},
  next_level_button_clicked_image = {},
  next_level_button_image = {},
  next_level_description = {},
  next_level_thumbnail = {},
  next_level_button_label = {},
  ...rest
}) => {
  const [featuresIcons, setFeaturesIcons] = useState(
    wide_range_features.map(feature => feature.icon.url)
  )

  const [nextLevelImage, setNextLevelImage] = useState(
    next_level_button_image.url
  )

  // const updateFeatureIcons = (index, icon) => {
  //   const icons = featuresIcons
  //   icons[index] = icon
  //   setFeaturesIcons(icons)
  // }
  return (
    <>
      <section className="content-block" style={{marginBottom: "-40px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 wideChoices marTop40">
              <h3>{wide_choice.text}</h3>
            </div>
            <div className="col-lg-12 m-bottom-20">
              <div className="row align-items-center">
                <div className="col">
                  <div className="content-desc">
                    <div className="marTop40">
                      <ul className="row align-items-center">
                        {wide_range_features.map((feature, index) => (
                          <li key={'dddf'+index} className="col-md-3 wideChoicesList d-flex">
                            <div className="icon">
                              <Link to={feature.range_link.text}>
                                <div
                                  className="iconCard"
                                  onMouseEnter={() =>
                                    setFeaturesIcons(
                                      featuresIcons.map((icon, i) =>
                                        index === i
                                          ? feature.icon_front.url
                                          : icon
                                      )
                                    )
                                  }
                                  onMouseLeave={() =>
                                    setFeaturesIcons(
                                      featuresIcons.map((icon, i) =>
                                        index === i ? feature.icon.url : icon
                                      )
                                    )
                                  }
                                >
                                  <img
                                    src={rest[`cfd_icon${index+1}`].url}
                                    alt="Card Back"
                                    style={index === 3 ? {maxHeight: "50px", float: "right"}:{}}
                                  />
                                </div>
                              </Link>
                            </div>
                            <div className="contents">
                              <h6 className="m-bottom-10" style={(index === 0 && rest.lang === "ar-ae") ? {marginBottom: "60px"}:{}}>
                                {feature.range_title.text}
                              </h6>
                              <p>{feature.range_feature_description.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
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


export default JoinAccuIndex
