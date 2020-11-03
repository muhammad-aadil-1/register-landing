import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query CompanyProfile {
    allPrismicCompanyProfile {
      nodes {
        data {
          company_overview {
            text
          }
          company_overview_body {
            text
          }
          company_overview_image {
            url
          }
          key_figures_body {
            raw
          }
          key_figures_boxes {
            key_feature_box_description {
              text
            }
            key_feature_box_title {
              text
            }
            number_only {
              text
            }
            number_prefix {
              text
            }
            number_sufix {
              text
            }
          }
          key_figures_heading {
            text
          }
          why_heading {
            text
          }
          why_reasons_box {
            why_description {
              text
            }
            why_image_icon {
              url
            }
            why_title {
              text
            }
          }
          payment_methods_heading {
            text
          }
          payment_methods_description {
            text
          }
          payment_methods_box {
            payment_method_box_icon {
              url
            }
            payment_method_box_link {
              text
            }
          }
          professional_skills_heading {
            text
          }
          professional_skills_description {
            text
          }
          professional_skills_boxes {
            professional_skills_box_level {
              text
            }
            professional_skills_box_title {
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
  const { allPrismicCompanyProfile } = response
  return allPrismicCompanyProfile.nodes.filter(x => x.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
