import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query ContactUsFormQuery {
    allPrismicFormComponent(
      filter: {
        data: { form_name: { elemMatch: { text: { eq: "Contact Us Form" } } } }
      }
    ) {
      nodes {
        data {
          body {
            items {
              field_name {
                text
              }
              field_label {
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
            primary {
              group_title {
                text
              }
            }
          }
          form_name {
            type
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
  const { allPrismicFormComponent } = response
  return allPrismicFormComponent.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
