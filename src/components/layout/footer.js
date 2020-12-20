import React, { useState } from "react"
import { connect, useSelector } from "react-redux"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FooterSectionQuery, FooterBarQuery } from "../../prismic/staticQueries"
import { PrismicRichText } from "../shared"
// import { trans } from "../../constants"

const Footer = () => {
  const language = useSelector(state => state.language)
  const { offices_box, office_heading_label, body } = FooterSectionQuery(
    language
  )
  const {
    main_content,
    reserved_label,
    social_icons_box,
    websites_box,
  } = FooterBarQuery(language)
  const [activeOffice, setActiveOffice] = useState(0)
  const isRtl = language === "ar-ae"

  return (
      <footer className="mt-5 footer" style={{direction: 'ltr', textAlign:'left'}}>
        <div className="py-5 footer-menu">
          <div className="container">
            <div className="row">
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Company</h4>
                <div className="footer-links">
                  <div className="my-2"><a href="#">Who</a></div>
                  <div className="my-2"><a href="#">Careers</a></div>
                  <div className="my-2"><a href="#">Our Vision</a></div>
                  <div className="my-2"><a href="#">Our Mission</a></div>
                  <div className="my-2"><a href="#">Legal Documents</a></div>
                  <div className="my-2"><a href="#">FAQs</a></div>
                  <div className="my-2"><a href="#">Contact Us</a></div>
                </div>
              </div>
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Markets</h4>
                <div className="footer-links">
                  <div className="my-2"><a href="#">What are CFDs ?</a></div>
                  <div className="my-2"><a href="#">Forex</a></div>
                  <div className="my-2"><a href="#">Bullion</a></div>
                  <div className="my-2"><a href="#">Indices</a></div>
                  <div className="my-2"><a href="#">Commodities Energy</a></div>
                  <div className="my-2"><a href="#">Exchange Traded Futures</a></div>
                </div>
              </div>
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Trading</h4>
                <div className="footer-links">
                  <div className="my-2"><a target="_blank" rel="noreferrer"
                                           href="/register">Live Account</a></div>
                  <div className="my-2"><a target="_blank" rel="noreferrer"
                                           href="/register-live">Corporate Account</a>
                  </div>
                  <div className="my-2"><a aria-current="page" className="" href="/register">Demo Account</a></div>
                  <div className="my-2"><a href="#">Client Forms</a></div>
                  <div className="my-2"><a href="#">Account Types</a></div>
                  <div className="my-2"><a href="#">Deposit</a></div>
                  <div className="my-2"><a href="#">Withdrawal</a></div>
                </div>
              </div>
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Office Network</h4>
                <div className="mb-3"><img alt="ddd"
                                           src="https://images.prismic.io/stagging-accuindex/f707701e-d3ea-42f7-bf65-0055835f2ffd_01520ebf-7fd5-452e-b516-e7ed9b2b7d6f_UAE.png?auto=compress,format"
                                           className="location-selector"/></div>
              </div>
              <div className="mt-3 col-lg-4 col-md-6 col-sm-6">
                <div className="text-gray my-3">
                  <div className="mb-2"><img alt="ddd" height="21px"
                                             src="https://images.prismic.io/stagging-accuindex/f707701e-d3ea-42f7-bf65-0055835f2ffd_01520ebf-7fd5-452e-b516-e7ed9b2b7d6f_UAE.png?auto=compress,format"/><span
                      className="mx-2">UAE Office</span></div>
                  <div className="footer-office"><p>2104, 21st Floor, Prime Tower,
                    Business Bay, Dubai, United Arab Emirates</p><p><a
                      href="mailto:Info@exiniti.com">Email: Info@exiniti.com</a></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

const mapStateToProps = state => ({ language: state.language })

export default connect(mapStateToProps)(Footer)
