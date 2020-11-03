import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
query AccountTypesQuery {
  allPrismicAccountTypes(filter: {data: {page_name: {elemMatch: {text: {eq: "Account Types Page"}}}}}) {
    nodes {
      data {
        account_types {
          account_cost {
            text
          }
          account_cost_label {
            text
          }
          account_features {
            text
            type
          }
          account_title {
            text
          }
          button_color
          button_link {
            text
          }
          button_name {
            text
          }
        }
        banner_image {
          url
        }
        page_heading {
          text
        }
        account1_properties {
          type
          text
          spans {
            end
            start
            type
          }
        }
        account2_properties {
          spans {
            end
            start
            type
          }
          text
          type
        }
        account_properties {
          text
          type
        }
        account_title {
          text
          type
        }
        account1_label {
          text
        }
        account1_link {
          text
        }
        account2_label {
          text
        }
        account2_link {
          text
        }
        extra_description {
          text
        }
        accounts_box {
          text1 {
            text
          }
          text2 {
            spans {
              data {
                link_type
                url
              }
              end
              start
              type
            }
            text
            type
          }
          text4 {
            spans {
              data {
                link_type
                url
              }
              end
              start
              type
            }
            text
            type
          }
          text3 {
            spans {
              data {
                link_type
                url
              }
              end
              start
              type
            }
            text
            type
          }
        }
      }
      lang
    }
  }
}


`

const dataResolver = (response, lang) => {
  const { allPrismicAccountTypes } = response
  return allPrismicAccountTypes.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
