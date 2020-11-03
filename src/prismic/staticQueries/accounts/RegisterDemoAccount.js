import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
query RegisterDemoAccount {
    allPrismicRegisterDemoPage {
      nodes {
        data {
          background_banner_image {
            url
          }
          bottom_icon1 {
            url
          }
          bottom_icon2 {
            url
          }
          bottom_icon3 {
            url
          }
          bottom_icon4 {
            url
          }
          cfd_icon1 {
            url
          }
          cfd_icon2 {
            url
          }
          cfd_icon3 {
            url
          }
          cfd_icon4 {
            url
          }
          form_bg_content_1 {
            text
          }
          form_bg_content_2 {
            text
          }
          form_bg_content_3 {
            text
          }
          form_bg_text_bottom {
            text
          }
          icon_text_1 {
            text
          }
          icon_text_2 {
            text
          }
          icon_text_3 {
            text
          }
          icon_text_4 {
            text
          }
          country_list {
            text
          }
        }
        lang
      }
    }
  }  
`

const dataResolver = (response, lang) => {
  const { allPrismicRegisterDemoPage } = response
  return allPrismicRegisterDemoPage.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData