import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
query AllMarktesQuery {
    allPrismicMarkets {
      nodes {
        data {
          banner_image {
            url
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
          markets_box {
            title {
              text
            }
            view_all_label {
              text
            }
            view_all_link {
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
  const { allPrismicMarkets } = response
  return allPrismicMarkets.nodes.filter(
    node => node.lang === lang
  )[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
