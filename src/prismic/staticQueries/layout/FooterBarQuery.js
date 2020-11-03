import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query FooterBarQuery {
    allPrismicFooterBar {
      nodes {
        data {
          main_content {
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
          reserved_label {
            text
          }
          social_icons_box {
            icon_class {
              text
            }
            icon_link {
              text
            }
          }
          websites_box {
            web_icon {
              url
            }
            web_link {
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
  const { allPrismicFooterBar } = response
  return allPrismicFooterBar.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
