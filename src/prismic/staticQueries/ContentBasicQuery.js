import { graphql, useStaticQuery } from "gatsby"

const getQuery = ($pageName = "Privacy Policy Page") => {
  return graphql`
    query ContentBasicQuery {
      allPrismicPrivacyPolicy(
        filter: {
          data: { page_name: { elemMatch: { text: { eq: $pageName } } } }
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
              }
              description_heading {
                text
              }
            }
            main_buttons {
              button_link {
                text
              }
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
        }
      }
    }
  `
}
const dataResolver = response => {
  const { allPrismicPrivacyPolicy } = response
  return allPrismicPrivacyPolicy.nodes[0].data
}

const useData = (language, $pageName) => {
  const response = useStaticQuery(getQuery($pageName))
  return dataResolver(response)
}

export default useData
