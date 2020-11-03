const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    query DynamicPageQuery {
      allPrismicDynamicPage {
        nodes {
          uid
          id
          lang
          data {
            page_category
            page_name {
              type
              text
            }
          }
        }
      }
    }
  `)

  const pageTemplates = {
    BasicLayout: path.resolve(__dirname, "src/templates/basic-layout.js"),
  }

  // Create pages for each Page in Prismic using the selected template.
  // pages.data.allPrismicDynamicPage.nodes.forEach(node => {
  //   createPage({
  //     path: `/${node.data.page_category}/${node.data.page_name ? node.data.page_name[0] ? node.data.page_name[0].text: '' : '' }`, //
  //     component: pageTemplates["BasicLayout"],
  //     context: {
  //       uid: node.data.page_name ? node.data.page_name[0] ? node.data.page_name[0].text: '' : '',
  //     },
  //   })
  // })
}
