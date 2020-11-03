
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
query DepositAndWithdrawal {
    allPrismicDepositAndWithdrawal {
      nodes {
        data {
          banner_image {
            url
          }
          d_headers {
            d_header_title {
              text
            }
          }
          deposit_label {
            text
          }
          deposit_table {
            d_action_label {
              text
            }
            d_action_link {
              text
            }
            d_currency {
              text
            }
            d_fee {
              text
            }
            d_processing_time {
              text
            }
            d_image {
              url
            }
          }
          page_heading {
            text
          }
          page_name {
            text
          }
          w_headers {
            w_header_title {
              text
            }
          }
          withdrawal_label {
            text
          }
          withdrawal_table {
            w_action_label {
              text
            }
            w_action_link {
              text
            }
            w_currency {
              text
            }
            w_fee {
              text
            }
            w_image {
              url
            }
            w_processing_time {
              text
            }
            w_type{
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
  const { allPrismicDepositAndWithdrawal } = response
  return allPrismicDepositAndWithdrawal.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
