import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query WhiteLabelApplicationQuery {
    allPrismicWhiteLabelApplication {
      nodes {
        data {
          banner_image {
            url
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
  const { allPrismicWhiteLabelApplication } = response
  return allPrismicWhiteLabelApplication.nodes.filter(
    node => node.lang === lang
  )[0].data
}
const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
