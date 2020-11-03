import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query CallBackQuery {
    allPrismicFormComponent(filter: { uid: { eq: "callback-request-form" } }) {
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
      }
    }
  }
`
const dataResolver = response => {
  const { allPrismicFormComponent } = response
  return allPrismicFormComponent.nodes[0].data
}

const useData = () => {
  const response = useStaticQuery(query)
  return dataResolver(response)
}

export default useData
