import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query HeaderQuery {
    allPrismicHeader {
      nodes {
        data {
          menues {
            menu_link {
              text
            }
            menu_name {
              text
            }
            sub_menues {
              raw
            }
          }
          logo_image {
            url
          }
        }
      }
    }
  }
`
const dataResolver = response => {
  const { allPrismicHeader } = response
  const headerData = allPrismicHeader.nodes[0].data
  handleMenues(headerData.menues)
  return headerData
}

const useData = language => {
  const response = useStaticQuery(query)
  return dataResolver(response)
}

const handleMenues = menues => {
  menues.map(menu => {
    if (
      !menu.sub_menues ||
      !menu.sub_menues.raw ||
      menu.sub_menues.raw.length === 0
    )
      delete menu.sub_menues
    menu.sub_menues = handleSubMenues(menu.sub_menues)
    return menu
  })
  return menues
}

const handleSubMenues = rows => {
  if (!rows) return null
  let sub_menues = rows.raw
  if (!sub_menues) return
  sub_menues.map((subMenu, index) => {
    sub_menues[index] = {
      sub_menu_name: subMenu.text,
      sub_menu_link: subMenu.spans[0].data.url,
    }
    return subMenu
  })
  return sub_menues
}

export default useData
