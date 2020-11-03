import React, { useState } from "react"
import { HeaderSectionQuery, HeaderSectionTopQuery } from "../../prismic/staticQueries"

import { connect, useSelector } from "react-redux"
import TopBar from "./top-bar"
import LanguagesDropdown from "./languages-dropdown"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
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

      <section className="header header--2" style={{direction: 'ltr'}}>
        <div className="menu_area menu1">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light"><a className="pr-4 navbar-brand" href="/"><img
                src="https://images.prismic.io/stagging-accuindex/b04c9b3d-723f-4f4d-a0d3-38b79919ca25_cff16831-d9f7-4d86-84c5-0b49032e8491_logonew.png?auto=compress,format"
                alt=""/></a>
              <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation"
                      className="navbar-toggler collapsed"><span className="navbar-toggler-icon"></span></button>
              <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                <div className="navbar-nav">
                  <div className="nav-item dropdown">
                    <ul className="mobile-only">
                      <li><a className="smallIcon" href="https://portal.accuindex.com/" target="_blank"
                             rel="noreferrer">Client Portal</a></li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-="true" toggle="collapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                      <div className="top_bar--lang align-self-center order-2 abc">
                        <div className="top_bar--lang align-self-center order-2">
                          <div className="dropdown" style={{background: 'unset'}}>
                            <div className="text-dark dropdown-toggle card-header" aria-haspopup="true"
                                 aria-expanded="false" id="language-selector"
                                 style={{background: 'unset', border: 'unset', padding: 'unset'}}><span
                                className="lang">EN</span><img className="lang_flag mx-2"
                                                               src="https://prismic-io.s3.amazonaws.com/stagging-accuindex/fd404204-5595-449c-b254-c3ba2cf04612_united-kingdom.svg"
                                                               alt="English" style={{width: '23px'}}/></div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div>
                    <div className="mainMenue menu-arrow  dropdown nav-item" style={{zIndex: '10000'}}><a
                        aria-haspopup="true" aria-expanded="false" id="collasible-nav-dropdown" href="#"
                        className="dropdown-toggle nav-link" role="button">Company</a></div>
                  </div>
                  <div>
                    <div className="mainMenue menu-arrow  dropdown nav-item"  style={{zIndex: '10000'}}><a
                        aria-haspopup="true" aria-expanded="false" id="collasible-nav-dropdown" href="#"
                        className="dropdown-toggle nav-link" role="button">Trading</a></div>
                  </div>
                  <div>
                    <div className="mainMenue menu-arrow  dropdown nav-item"  style={{zIndex: '10000'}}><a
                        aria-haspopup="true" aria-expanded="false" id="collasible-nav-dropdown" href="#"
                        className="dropdown-toggle nav-link" role="button">Markets</a></div>
                  </div>
                  <div>
                    <div className="mainMenue menu-arrow  dropdown nav-item"  style={{zIndex: '10000'}}><a
                        aria-haspopup="true" aria-expanded="false" id="collasible-nav-dropdown" href="#"
                        className="dropdown-toggle nav-link" role="button">Academy</a></div>
                  </div>
                </div>
              </div>
            </nav>
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
