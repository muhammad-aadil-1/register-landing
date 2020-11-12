import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query RiskDisclaimerQuery {
    allPrismicPrivacyPolicy(
      filter: {
        data: {
          page_name: { elemMatch: { text: { eq: "Risk Disclaimer Page" } } }
        }
      }
    ) {
      nodes {
        data {
          banner_image {
            url
          }
          description_content1 {
            description_content {
              text
              type
              spans {
                start
                end
                type
                data {
                  link_type
                  url
                }
              }
            }
            description_heading {
              text
            }
          }
          main_buttons {
            button_value {
              text
            }
            button_link {
              text
            }
            button_color
          }
          map_image {
            url
          }
          page_heading {
            text
          }
          page_name {
            type
            text
          }
          stats_heading {
            text
          }
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
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicPrivacyPolicy } = response
  return allPrismicPrivacyPolicy.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData