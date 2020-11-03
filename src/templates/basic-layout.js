import React from "react"
// import { Link } from "gatsby"
import { connect, useSelector } from "react-redux"

// import { CareersQuery } from "../prismic/staticQueries"
import Layout from "../components/layout"
import ContentBasic from "../components/content-basic"
import { graphql } from "gatsby"
import get from "lodash/get"
// import { node } from "prop-types"

// import { IMAGES } from '../../constants';

export const query = graphql`
  query MyQuery($uid: String) {
    allPrismicDynamicPage(filter: {data: {page_name: {elemMatch: {text: {eq: $uid}}}}}) {
      nodes {
        uid
        lang
        id
        data {
          page_category
          page_heading {
            text
          }
          banner_image {
            url
          }
          description_content1 {
            description_content {
              type
              text
              spans {
                type
                start
                end
                data {
                  link_type
                  target
                  url
                }
              }
            }
            description_heading {
              text
            }
          }
          main_buttons {
            button_color
            button_link {
              text
            }
            button_value {
              text
            }
          }
          show_buttons_in_banner
          show_stats
          show_subscription_panel
          stats_items {
            stat_icon {
              text
            }
            stat_title {
              text
            }
            stat_value {
              text
            }
          }
          stats_heading {
            text
          }
        }
      }
    }
  }
`

const Careers = props => {
  const language = useSelector(state => state.language)
  const nodes = get(props.data, "allPrismicDynamicPage.nodes", [])
  const selectedLangNode = nodes.filter(obj => obj.lang === language)
  const data = get(selectedLangNode, "0.data");

  if (!data) {
    return null
  }
  return (
    <>
      <Layout>
        <ContentBasic {...data} />
      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return {
    language: state.language,
  }
}

export default connect(mapStateToProps)(Careers)
