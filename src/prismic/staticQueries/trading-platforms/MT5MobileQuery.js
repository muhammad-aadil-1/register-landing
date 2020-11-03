import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query MT5MobileQuery {
    allPrismicMt5Mobile {
      nodes {
        data {
          download_box {
            download_picture {
              url
            }
            download_content {
              text
              type
              spans {
                end
                start
                type
              }
            }
            download_label {
              text
            }
            download_link {
              text
            }
            download_title {
              text
            }
          }
          banner_image {
            url
          }
          content_body {
            text
            type
            spans {
              end
              start
              type
            }
          }
          content_heading {
            text
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
          page_heading {
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
          content_image {
            url
          }
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicMt5Mobile } = response
  return allPrismicMt5Mobile.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
