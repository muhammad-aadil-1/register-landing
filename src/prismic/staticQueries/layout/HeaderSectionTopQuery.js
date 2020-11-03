import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query HeaderSectionTopQuery {
    allPrismicHeaderSectionTop {
      nodes {
        data {
          academy_icon {
            url
          }
          academy_label {
            text
          }
          arabic_flag {
            url
          }
          cyse_link {
            text
          }
          demo_account_label {
            text
          }
          english_flag {
            url
          }
          heading_label {
            text
          }
          live_account_label {
            text
          }
          portal_icon {
            url
          }
          portal_label {
            text
          }
          academy_link {
            text
          }
          portal_link {
            text
          }
          live_account_link {
            text
          }
          demo_account_link {
            text
          }
        }
        lang
      }
    }
  }
`
const dataResolver = (response, lang) => {
  const { allPrismicHeaderSectionTop } = response
  return allPrismicHeaderSectionTop.nodes.filter(x => x.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
