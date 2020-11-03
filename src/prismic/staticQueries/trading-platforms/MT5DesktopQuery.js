import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query MT5Desktop {
    allPrismicMt5Desktop {
      nodes {
        data {
          banner_image {
            url
          }
          content_description {
            text
          }
          content_heading {
            text
          }
          download_label {
            text
          }
          download_link {
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
          content_body {
            text
            type
            spans {
              start
              end
              type
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
  const { allPrismicMt5Desktop } = response
  return allPrismicMt5Desktop.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
