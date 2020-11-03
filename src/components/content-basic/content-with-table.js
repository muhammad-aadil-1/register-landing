import React from "react"
// import { Link } from "gatsby"
import { tableDataMapper, multiTableDataMapper } from "../../prismic/helpers"

import {
  HeadingBanner,
  QuickStats,
  ContentTable,
  ContentTableMulti,
  SubscriptionPanel,
} from "./../shared"

const ContentWithTable = ({
  banner_image = {},
  main_buttons = [],
  page_heading = {},
  stats_heading = {},
  stats_items = [],
  table = [],
  multitable= false,
  total_tables=[],
  show_stats= true,
}) => {
  // console.log('huashdf ', total_tables, table[0].primary.table_number)
  const [tableHeader, tableBody] = tableDataMapper(table)
  let allTables;
  if(multitable){
    allTables = multiTableDataMapper(table)
  }
  return (
    <>
      <HeadingBanner
        heading={page_heading}
        buttons={main_buttons}
        banner_image={banner_image}
      />
      {show_stats === true && (
        <QuickStats heading={stats_heading} items={stats_items} />
      )}
      {multitable === false && <ContentTable header={tableHeader} body={tableBody} />}
      {multitable === true && <ContentTableMulti data={allTables} totalTables={total_tables} />}
      
      <SubscriptionPanel />
    </>
  )
}

export default ContentWithTable
