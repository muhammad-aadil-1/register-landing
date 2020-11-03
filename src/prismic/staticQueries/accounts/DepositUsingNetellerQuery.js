import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query DepositUsingNeteller {
    allPrismicSimpleForm(
      filter: {
        data: {
          form_name: {
            elemMatch: { text: { eq: "deposit using neteller Page" } }
          }
        }
      }
    ) {
      nodes {
        data {
          form_name {
            text
          }
          banner_image {
            url
          }
          form_fields {
            field_label {
              text
            }
            field_name {
              text
            }
            field_place_holder {
              text
            }
            field_type {
              text
            }
          }
          form_heading {
            text
          }
          submit_button_text {
            text
          }
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicSimpleForm } = response
  return allPrismicSimpleForm.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
