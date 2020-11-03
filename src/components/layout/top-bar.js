import React from "react"
import { connect, useSelector } from "react-redux"
import { Link } from "gatsby"

import { HeaderSectionTopQuery } from "../../prismic/staticQueries"
import { Container, Row, Col } from "react-bootstrap"
import { setWebLanguage } from "../../reducers"
import LanguagesDropdown from "./languages-dropdown"
const TopBar = () => {
  const language = useSelector(state => state.language)

  const {
    academy_icon,
    academy_label,
    // arabic_flag,
    cyse_link,
    // demo_account_icon,
    // live_account_icon,

    demo_account_label,
    live_account_label,

    // english_flag,
    heading_label,
    
    portal_icon,
    portal_label,
    academy_link,
    portal_link,
    live_account_link,
    demo_account_link,
  } = HeaderSectionTopQuery(language)

  return (
    <div className="top_bar d-flex align-items-center text-blue-dark">
      <Container>
        <Row>
          <Col md={12}>
            <div className="d-flex topbar_content justify-content-between">
              <LanguagesDropdown />
             
            
              <div className="top_bar_social">
                <ul>
                  <li className="systemNames">
                    {heading_label[0].text}
                    <span style={{direction: language === 'ar-ae'? 'rtl':'ltl'}}>
                      <span style={{display: 'inline-block'}}>FSCM</span>
                      <a
                        className="btn-arrow btn-icon icon-left"
                        target="_blank"
                        rel="noreferrer"
                        href={cyse_link[0].text}
                      >
                        CySEC{" "}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="top_bar_social">
                <ul>
                  <li>
                    <Link className="smallIcon grey" to={academy_link[0].text}>
                      {/* <img alt="ddd" src={academy_icon.url} />  */}
                      {academy_label[0].text}
                    </Link>
                  </li>
                  <li>
                    <a
                      className="smallIcon grey"
                      href={portal_link[0].text}
                      target="_blank" rel="noreferrer"
                    >
                      {/* <img alt="ddd" src={portal_icon.url} />  */}
                      {portal_label[0].text}
                    </a>
                  </li>
                  {/* <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="smallButton"
                      href={demo_account_link[0].text}
                    >
                      <button type="button" className="btn btn-small account-btn demo">
                        {demo_account_label[0].text}
                      </button>
                    </a>
                  </li> */}
                  {/* <li >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="smallButton trade-now"
                      href={live_account_link[0].text}
                    >
                      <button type="button" className="btn btn-small account-btn live">
                      {live_account_label[0].text}
                      </button>
                      
                    </a>
                  </li> */}
                </ul>
              </div>
            
            
              <div className="top_bar_social">
                <ul>
                <li >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="smallButton trade-now"
                      href={live_account_link[0].text}
                    >
                      {/* <img alt="ddd" src={live_account_icon.url} /> */}
                      {/* <button type="button" className="btn btn-small account-btn live"> */}
                      {live_account_label[0].text}
                      {/* </button> */}
                      
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({ language: state.language })

export default connect(mapStateToProps, { setWebLanguage })(TopBar)
