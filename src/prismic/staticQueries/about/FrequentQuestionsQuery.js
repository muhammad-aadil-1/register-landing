import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query FaqsQuery {
    allPrismicFaqs {
      nodes {
        data {
          banner_image {
            url
          }
          page_heading {
            text
          }
          questionsbox {
            question {
              text
            }
            answer {
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
  const { allPrismicFaqs } = response
  return allPrismicFaqs.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
