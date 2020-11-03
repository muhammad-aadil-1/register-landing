import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query BecomeAPartner {
    allPrismicBlankPageWithBanner(
      filter: {
        data: { page_name: { elemMatch: { text: { eq: "Become a Partner" } } } }
      }
    ) {
      nodes {
        id
        data {
          banner_image {
            url
          }
          body_image {
            url
          }
          button_label {
            text
          }
          description_content {
            text
            type
            spans {
              end
              start
              type
            }
          }
          page_heading {
            text
          }
          page_name {
            text
          }
          button_link {
            text
          }
          button_color
        }
        lang
      }
    }
  }
`
const dataResolver = (response, lang) => {
  const { allPrismicBlankPageWithBanner } = response
  return allPrismicBlankPageWithBanner.nodes.filter(
    node => node.lang === lang
  )[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
