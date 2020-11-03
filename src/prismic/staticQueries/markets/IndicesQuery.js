import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query IndicesQuery {
    allPrismicContentWithTablePage(
      filter: {
        data: { page_name: { elemMatch: { text: { eq: "Indices Page" } } } }
      }
    ) {
      nodes {
        data {
          banner_image {
            url
          }
          table {
            slice_type
            items {
              col {
                text
                type
              }
            }
          }
          page_name {
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
            type
            text
          }
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicContentWithTablePage } = response
  return allPrismicContentWithTablePage.nodes.filter(
    node => node.lang === lang
  )[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
