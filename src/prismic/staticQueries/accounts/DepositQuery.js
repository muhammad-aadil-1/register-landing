import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query DepositQuery {
    allPrismicDeposit {
      nodes {
        data {
          page_heading {
            text
          }
          neteller_description {
            text
          }
          neteller_heading {
            text
          }
          neteller_icon {
            url
          }
          skrill_description {
            text
          }
          skrill_heading {
            text
          }
          skrill_icon {
            url
          }
          visa_description {
            text
          }
          visa_heading {
            text
          }
          visa_icon {
            url
          }
          visa_description {
            text
          }
          visa_heading {
            text
          }
          visa_icon {
            url
          }

          cashu_description {
            text
          }
          cashu_heading {
            text
          }
          cashu_icon {
            url
          }
          wire_transfer_description {
            text
          }
          wire_transfer_heading {
            text
          }
          wire_transfer_icon {
            url
          }
          banner_image {
            url
          }
          wire_transfer_banks_boxes {
            bank_account_name {
              text
            }
            bank_account_number {
              text
            }
            bank_address {
              text
            }
            bank_iban_number {
              text
            }
            bank_name {
              text
            }
            bank_swift_code {
              text
            }
            bank_title {
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
  const { allPrismicDeposit } = response
  return allPrismicDeposit.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
