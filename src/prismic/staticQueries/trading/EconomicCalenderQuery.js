import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query EconomicCalenderQuery {
    allPrismicEconomicCalender {
      nodes {
        data {
          banner_image {
            url
          }
          page_description {
            text
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
  const { allPrismicEconomicCalender } = response
  return allPrismicEconomicCalender.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
