import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query WithdrawalQuery {
    allPrismicWithdrawal {
      nodes {
        data {
          icon_neteller {
            url
          }
          icon_skrill {
            url
          }
          icon_wire_transfer {
            url
          }
          page_description {
            text
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
  const { allPrismicWithdrawal } = response
  return allPrismicWithdrawal.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
