/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {  useSelector } from "react-redux"

// import "./../../assets/theme-1/index.scss";
import "./../../assets/theme/index.scss"

import Header from "./header"
import Footer from "./footer"
import FixIcons from "./fix-icons"
import { Helmet } from "react-helmet"

import { HeaderSectionQuery, CallBackQuery } from "../../prismic/staticQueries"
import { config } from '../../constants'

const { paysafeKeys } = config;

// const RTL = React.lazy(() => import("./rtl"));
const Layout = ({ children }) => {
  const language = useSelector(state => state.language)

  const isRtl = language === "ar-ae"

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    // logo,
    // body,
    callback_icon,
    callback_title,
    callback_form_image,
    chat_icon,
    chat_title,
    user_guide_icon,
    user_guide_title,
    user_guide_link,
  } = HeaderSectionQuery(language)
  const callback_form = CallBackQuery(language)

  const callback = {
    title: callback_title,
    icon: callback_icon,
    form: callback_form,
    formImage: callback_form_image,
  }
  const chat = { title: chat_title, icon: chat_icon }
  const userGuide = {
    title: user_guide_title,
    icon: user_guide_icon,
    link: user_guide_link,
  }

  return (
    <>
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://accuindex.com/Content/img/favicon.png"
          />
          {/* <html lang={language} dir={isRtl ? 'rtl' : 'ltr'}/> */}

          <script src={paysafeKeys.sdk}></script>
          {/* <meta name="description" content="Accuindex provides over 200 financial instruments: currency, commodity, share CFDs  and more. Learn more about the benefits and sign up for an account today. Transparent Fee Structure."></meta> */}
        </Helmet>
        <Header />

        <main
          dir={isRtl ? "rtl" : "ltr"}
          style={{ textAlign: isRtl ? "right" : "left" }}
        >
          {children}

        </main>
       
        <Footer
          dir={isRtl ? "rtl" : "ltr"}
          style={{ textAlign: isRtl ? "right" : "left" }}
        />
       
        {/* </div> */}
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
