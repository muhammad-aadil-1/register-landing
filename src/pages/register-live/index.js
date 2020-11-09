import React from "react"
import { useSelector } from "react-redux"

import Layout from "../../components/layout"
import { useHomePageData, RegisterDemoAccount } from "../../prismic/staticQueries"

import TradingPlatforms from "./trading-platforms"
import CarouselTop from "./carousel"

const IndexPage = () => {
  const language = useSelector(state => state.language)

  const homePageData = useHomePageData(language)
  const registerDemoAccount = RegisterDemoAccount(language)

  return (
    <Layout>
      <>
        <CarouselTop {...registerDemoAccount} language={language} />
        <TradingPlatforms {...homePageData} {...registerDemoAccount} lang={language} />
      </>
    </Layout>
  )
}

export default IndexPage
