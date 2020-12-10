import React, { useState } from "react"
import { HeaderSectionQuery, HeaderSectionTopQuery } from "../../prismic/staticQueries"

import { connect, useSelector } from "react-redux"
import TopBar from "./top-bar"
import LanguagesDropdown from "./languages-dropdown"
import { Nav, Navbar, NavDropdown, Col } from "react-bootstrap"
import { Link } from "gatsby"
import SEO from './../seo';

const HeaderSection = () => {
  const language = useSelector(state => state.language)
  const {
    logo,
    body,
  } = HeaderSectionQuery(language);

  const {
    portal_icon,
    portal_label,
    portal_link,
  } = HeaderSectionTopQuery(language)

  
  const hasSplitMenu = (items=[]) => {
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if(item.on_right === true)
        return true;
    }
    return false;
  }
// console.log('body is ', body)
  const isRtl = language === "ar-ae" 

  const [activeItem, setActiveItem] = useState(null)

  const toggleMenu = index => {
    setActiveItem(activeItem === index ? null : index)
  }

  return (
    <>
            {/* <SEO 
              title="AccuIndex - Trade Forex, Shares, Commodities and CFDs | AccuIndex" 
              description="Accuindex provides over 200 financial instruments: currency, commodity, share CFDs  and more. Learn more about the benefits and sign up for an account today. Transparent Fee Structure."
            /> */}

      <section className="header header--2" style={{ direction: isRtl ? "rtl" : "ltr" }}>
        <div className="menu_area menu1">
          <div className="container">
          <Navbar collapseOnSelect expand="lg">
            <Col xs={12} md={'auto'} className="nav-col px-0 d-flex justify-content-between" dir={isRtl ? "rtl" : "ltr"}>
              <Link to={'/'} className="pr-4 navbar-brand">
                <img src={logo.url} alt="" />
              </Link>
              <div className="d-flex align-items-center">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </div>
            </Col>
            <div className="d-none d-md-flex order-lg-2">
              <LanguagesDropdown />
            </div>
            <Col className="px-0">
                <Navbar.Collapse id="responsive-navbar-nav">
                  <div className="mobile-only">
                    <LanguagesDropdown />
                  </div>
                  {body.map((menue, index) => (
                    <div key={'keys-'+index} className="nav-item">
                      <Link className="nav-link text-dark" to="#">
                        {menue.primary.menu_name[0].text}
                      </Link>
                    </div>
                  ))}
                </Navbar.Collapse>
              </Col>
            </Navbar>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    language: state.language,
  }
}

export default connect(mapStateToProps)(HeaderSection)
