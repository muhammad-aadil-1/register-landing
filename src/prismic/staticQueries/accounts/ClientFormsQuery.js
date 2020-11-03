import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query ClientFormsQuery {
    allPrismicClientForms {
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
          client_forms {
            document_link {
              url
            }
            document_title {
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
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicClientForms } = response
  return allPrismicClientForms.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
