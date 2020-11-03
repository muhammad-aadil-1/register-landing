import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
query EducationAcademyQuery {
  allPrismicEducationAcedmy {
    nodes {
      data {
        page_title {
          text
        }
        banner_image {
          url
        }
        body {
          items {
            rep_body {
              text
              type
              spans {
                data {
                  link_type
                  url
                }
                end
                start
                type
              }
            }
            rep_title {
              text
            }
          }
          primary {
            section_image {
              url
            }
            section_title {
              text
            }
          }
        }
        page_content {
          text
          type
          spans {
            end
            type
            start
          }
        }
        page_heading {
          text
        }
      }
      lang
    }
  }
}

`
const dataResolver = (response, lang) => {
  const { allPrismicEducationAcedmy } = response
  return allPrismicEducationAcedmy.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
