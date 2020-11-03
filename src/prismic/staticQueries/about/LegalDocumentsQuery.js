import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query LegalDocumentQuery {
    allPrismicLegalDocuments {
      nodes {
        data {
          heading_description {
            text
          }
          page_heading {
            text
          }
          legal_documents {
            document_file {
              url
            }
            document_link_text {
              text
            }
            document_name {
              text
            }
          }
          map_image {
            url
          }
          banner_image {
            url
          }
          content_description {
            type
            text
            spans {
              end
              start
              type
            }
          }
        }
        lang
      }
    }
  }
`

const dataResolver = (response, lang) => {
  const { allPrismicLegalDocuments } = response
  return allPrismicLegalDocuments.nodes.filter(node => node.lang === lang)[0]
    .data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
