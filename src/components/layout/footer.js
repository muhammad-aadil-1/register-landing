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
                  <div className="my-2"><a href="/Company/Who-we-are">Who</a></div>
                  <div className="my-2"><a href="/Company/Carrers">Careers</a></div>
                  <div className="my-2"><a href="/Company/OurVision">Our Vision</a></div>
                  <div className="my-2"><a href="/Company/OurMission">Our Mission</a></div>
                  <div className="my-2"><a href="/Company/Legal-documents">Legal Documents</a></div>
                  <div className="my-2"><a href="/Company/FAQ">FAQs</a></div>
                  <div className="my-2"><a href="/Company/Contact-us">Contact Us</a></div>
                </div>
              </div>
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Markets</h4>
                <div className="footer-links">
                  <div className="my-2"><a href="/Markets/CFDs">What are CFDs ?</a></div>
                  <div className="my-2"><a href="/Markets/Forex">Forex</a></div>
                  <div className="my-2"><a href="/Markets/Bullion">Bullion</a></div>
                  <div className="my-2"><a href="/Markets/Indices">Indices</a></div>
                  <div className="my-2"><a href="/Markets/CommoditiesEnergy">Commodities Energy</a></div>
                  <div className="my-2"><a href="/Markets/ExchangeTradedFutures">Exchange Traded Futures</a></div>
                </div>
              </div>
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Trading</h4>
                <div className="footer-links">
                  <div className="my-2"><a target="_blank" rel="noreferrer"
                                           href="https://portal.accuindex.com/account/live">Live Account</a></div>
                  <div className="my-2"><a target="_blank" rel="noreferrer"
                                           href="https://portal.accuindex.com/account/partner">Corporate Account</a>
                  </div>
                  <div className="my-2"><a aria-current="page" className="" href="/register">Demo Account</a></div>
                  <div className="my-2"><a href="/Trading/Forms">Client Forms</a></div>
                  <div className="my-2"><a href="/Trading/Accounts">Account Types</a></div>
                  <div className="my-2"><a href="/Trading/Deposit">Deposit</a></div>
                  <div className="my-2"><a href="/Trading/Withdrawal">Withdrawal</a></div>
                </div>
              </div>
              <div className="mt-3 col-lg-2 col-md-6 col-sm-6"><h4 className="my-3">Office Network</h4>
                <div className="mb-3"><img alt="ddd"
                                           src="https://images.prismic.io/stagging-accuindex/2f018588-8bea-4a14-9657-b4bc4744bb2c_225a8462-a5da-42ca-8f53-c618463dd889_Cyprus.png?auto=compress,format"
                                           className="location-selector"/></div>
                <div className="mb-3"><img alt="ddd"
                                           src="https://images.prismic.io/stagging-accuindex/f707701e-d3ea-42f7-bf65-0055835f2ffd_01520ebf-7fd5-452e-b516-e7ed9b2b7d6f_UAE.png?auto=compress,format"
                                           className="location-selector"/></div>
                <div className="mb-3"><img alt="ddd"
                                           src="https://images.prismic.io/stagging-accuindex/f7c9e7e3-fe38-4320-a682-f278156b2e4e_e1851b23-9639-4c42-bd42-9b8d212886b1_Mauritius.png?auto=compress,format"
                                           className="location-selector"/></div>
              </div>
              <div className="mt-3 col-lg-4 col-md-6 col-sm-6">
                <div className="text-gray my-3">
                  <div className="mb-2"><img alt="ddd" height="21px"
                                             src="https://images.prismic.io/stagging-accuindex/f7c9e7e3-fe38-4320-a682-f278156b2e4e_e1851b23-9639-4c42-bd42-9b8d212886b1_Mauritius.png?auto=compress,format"/><span
                      className="mx-2">Mauritius Office</span></div>
                  <div className="footer-office"><p>Suite 207, 2nd Floor, The Catalyst, Silicon Avenue, 40 Cybercity,
                    Ebene 72201, Mauritius</p><p><a href="tel:+2304644888">Phone : +230 464 4888</a></p><p><a
                      href="mailto:Info@accuindex.com">Email: Info@accuindex.com</a></p></div>
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
