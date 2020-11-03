import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query DepositNetellerFormQuery {
    allPrismicFormComponent(filter: { uid: { eq: "deposit-neteller" } }) {
      nodes {
        data {
          submit_button_text {
            text
          }
          form_name {
            text
          }
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
