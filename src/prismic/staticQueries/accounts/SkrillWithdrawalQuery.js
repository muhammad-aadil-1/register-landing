import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query SkrillWithdrawalQuery {
    allPrismicFormComponent(
      filter: {
        data: {
          body: { elemMatch: {} }
          form_name: { elemMatch: { text: { eq: "Skrill Withdrawal Form" } } }
        }
      }
    ) {
      nodes {
        data {
          body {
            primary {
              group_title {
                text
              }
            }
            items {
              field_label {
                text
              }
              field_name {
                text
              }
              field_placeholder {
                text
              }
              field_required
              field_type {
                text
              }
              options {
                text
              }
            }
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
  const { allPrismicFormComponent } = response
  return allPrismicFormComponent.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
