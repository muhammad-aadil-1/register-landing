import React from "react"
// import { Link } from "gatsby"

import {
  HeadingBanner,
  BreadCrumbBanner,
  QuickStats,
  SubscriptionPanel,
  MainContent,
} from "./../shared"

const ContentBasic = ({
  banner_image,
  description_content1,
  main_buttons,
  page_heading,
  stats_heading,
  stats_items,
  linksTarget = "_self",
  show_subscription_panel = true,
  show_stats = true,
  breadCrumbBanner=false
}) => {

  return (
    <>
      {breadCrumbBanner === true &&
        <BreadCrumbBanner
          heading={page_heading}
          buttons={main_buttons}
          banner_image={banner_image}
        />
      }
      {breadCrumbBanner === false &&
        <HeadingBanner
          heading={page_heading}
          buttons={main_buttons}
          banner_image={banner_image}
        />
      }
      
      {show_stats === true && (
        <QuickStats heading={stats_heading} items={stats_items} />
      )}
      {/* <MainContent {...description_content1[0]} linksTarget={linksTarget} /> */}
      {description_content1.map(obj=>
        <>
          <MainContent {...obj} linksTarget={linksTarget} />
          {/* {JSON.stringify(obj)} */}
        </>
      )}
      {show_subscription_panel === true && <SubscriptionPanel />}
    </>
  )
}

export default ContentBasic
