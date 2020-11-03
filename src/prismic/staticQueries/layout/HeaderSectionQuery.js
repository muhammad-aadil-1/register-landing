import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query HeaderSectionQuery {
    allPrismicHeaderSection {
      nodes {
        data {
          logo {
            url
          }
          body {
            primary {
              menu_link {
                text
              }
              menu_name {
                text
              }
            }
            items {
              sub_menu_link {
                text
              }
              sub_menu_name {
                text
              }
              open_external
              on_right
              params {
                text
              }
            }
          }
          callback_icon {
            url
          }
          callback_form_image {
            url
          }
          callback_title {
            text
          }
          chat_icon {
            url
          }
          chat_title {
            text
          }
          user_guide_icon {
            url
          }
          user_guide_link {
            text
          }
          user_guide_title {
            text
          }
        }
        lang
      }
    }
  }
`
const dataResolver = (response, lang) => {
  const { allPrismicHeaderSection } = response
  return allPrismicHeaderSection.nodes.filter(x => x.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
