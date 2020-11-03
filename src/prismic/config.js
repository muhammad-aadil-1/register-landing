require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const home_page = require("./schemas/home_page.json")
const company_profile = require("./schemas/company_profile.json")
const header = require("./schemas/header.json")

module.exports = {
  repositoryName: process.env.GATSBY_PRISMIC_REPO,
  accessToken: process.env.GATSBY_PRISMIC_API_KEY,
  schemas: {
    home_page,
    company_profile,
    header,
  },
  lang: "*",
}
