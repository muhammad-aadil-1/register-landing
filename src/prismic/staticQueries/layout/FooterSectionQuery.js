import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query FooterSectionQuery {
    allPrismicFooterSection {
      nodes {
        data {
          offices_box {
            location_description {
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
            location_icon {
              url
            }
            location_title {
              text
            }
          }
          office_heading_label {
            text
          }
          body {
            primary {
              menu_label {
                text
              }
            }
            items {
              sub_menu_label {
                text
              }
              sub_menu_link {
                text
              }
              open_external
            }
          }
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicFooterSection } = response
  return allPrismicFooterSection.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
