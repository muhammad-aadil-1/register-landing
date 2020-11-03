import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query UserQuideQuery {
    allPrismicUserGuide {
      nodes {
        data {
          guides_box {
            guide_description {
              text
            }
            guide_file {
              url
            }
            guide_image {
              url
            }
            guide_title {
              text
            }
          }
          page_heading {
            text
          }
          banner_image {
            url
          }
        }
        lang
      }
    }
  }
`


const dataResolver = (response, lang) => {
  const { allPrismicUserGuide } = response
  return allPrismicUserGuide.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
