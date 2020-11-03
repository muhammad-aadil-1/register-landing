import React from "react"
// import { Link } from "gatsby"

// import { IMAGES } from '../../constants';
import { PrismicRichText } from "./../shared"

const MainContent = ({
  description_heading = [{}],
  description_content = [],
  linksTarget = "_self",
  children,
}) => {
  return (
    <>
      <section className="job-contents p-top-20 p-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {description_heading.length > 0 && <h3>{description_heading[0].text}</h3>}
              {description_content && <PrismicRichText
                data={description_content}
                linksTarget={linksTarget}
              />}
              
            </div>
          </div>
          {children}
        </div>
      </section>
    </>
  )
}

export default MainContent
