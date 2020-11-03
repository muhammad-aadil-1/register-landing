import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query ContactUsQuery {
    allPrismicContactUs(
      filter: {
        data: { page_name: { elemMatch: { text: { eq: "Contact Us Page" } } } }
      }
    ) {
      nodes {
        data {
          address {
            address_descriptions {
              text
              type
            }
            address_icon {
              text
            }
            address_title {
              text
            }
          }
          banner_image {
            url
          }
          contact_us_form_description {
            text
          }
          contact_us_form_title {
            text
          }
          heading_title {
            text
          }
          map_url {
            text
          }
          title1 {
            text
          }
          title2 {
            text
          }
          title3 {
            text
          }
          desc1 {
            spans {
              end
              start
              type
            }
            text
            type
          }
          desc2 {
            spans {
              end
              start
              type
            }
            text
            type
          }
          desc3 {
            spans {
              end
              start
              type
            }
            text
            type
          }
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicContactUs } = response
  return allPrismicContactUs.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
