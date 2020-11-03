import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
query HomePageQuery {
  allPrismicHomePage {
    nodes {
      data {
        application_links {
          link_icon {
            url
          }
          link_url {
            text
          }
        }
        demo_account_link {
          url
        }
        join_heading {
          text
        }
        latest_offer {
          text
        }
        latest_offer_description {
          text
        }
        latest_offers {
          offer_description {
            text
          }
          offer_link {
            text
          }
          offer_title {
            text
          }
          thumbnail {
            url
          }
        }
        live_account_link {
          url
        }
        newsletter_placeholder_text {
          text
        }
        next_level {
          text
        }
        next_level_button_label {
          text
        }
        
        next_level_description {
          text
        }
        next_level_thumbnail {
          url
        }
        payment_gateways {
          gateway_thumbnail {
            url
          }
        }
        show_price_feed
        slider {
          slider_image {
            url
          }
          slider_media {
            url
          }
        }
        text_below_demo_and_live_buttons {
          raw
        }
        title {
          text
        }
        trading_box {
          trading_tile {
            url
          }
        }
        trading_description {
          text
        }
        trading_icon {
          url
        }
        trading_title {
          text
        }
        why_boxes {
          icon {
            url
          }
          why_description1 {
            text
          }
          why_title {
            text
          }
          why_link {
            text
          }
          why_is_external
        }
        why_description {
          text
        }
        why_text {
          text
        }
        wide_choice {
          text
        }
        wide_range_description {
          text
        }
        wide_range_features {
          icon {
            url
          }
          icon_front {
            url
          }
          range_feature_description {
            text
          }
          range_link {
            text
          }
          range_title {
            text
          }
        }
        wide_range_thumbnail {
          url
        }
        demo_account_label {
          text
        }
        live_account_label {
          text
        }
      }
      lang
    }
  }
}
`

const dataResolver = (response, lang) => {
  const { allPrismicHomePage } = response
  return allPrismicHomePage.nodes.filter(node => node.lang === lang)[0].data
}

const useData = lang => {
  const response = useStaticQuery(query)
  return dataResolver(response, lang)
}

export default useData
