import React from "react"
import propTypes from "prop-types"
import { connect } from "react-redux"
import { Dropdown, Card } from "react-bootstrap"
import { config } from '../../constants';

import { HeaderSectionTopQuery } from "../../prismic/staticQueries"
import { setWebLanguage } from "../../reducers"

const LanguagesDropdown = ({ language = config.arabicLanguage, setWebLanguage }) => {
  const { arabic_flag, english_flag } = HeaderSectionTopQuery(language)

  const languages = {
    [config.arabicLanguage]: {
      title: "عربي",
      flag: arabic_flag.url,
    },
    [config.englishLanguage]: {
      title: "EN",
      flag: english_flag.url,
    },
  }

  const anotherLanguage = language === config.englishLanguage ? config.arabicLanguage : config.englishLanguage

  return (
    <div className="top_bar--lang align-self-center order-2">
      <Dropdown style={{ background: "unset" }}>
        <Dropdown.Toggle
          id="language-selector"
          className="text-dark"
          style={{ background: "unset", border: "unset", padding: "unset" }}
          as={Card.Header}
        >
          <span className="lang">{languages[language].title}</span>
          <img
            className="lang_flag mx-2"
            src={languages[language].flag}
            alt="English"
            style={{ width: "23px" }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{padding: '0px'}}>
          <Dropdown.Item onClick={e => setWebLanguage(anotherLanguage)}>
            <img
              src={languages[anotherLanguage].flag}
              alt=""
              style={{ width: "23px" }}
              className="mx-2"
            />
            {languages[anotherLanguage].title}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

LanguagesDropdown.prototype = {
  setWebLanguage: propTypes.func.isRequired,
}

const mapStateToProps = state => ({ language: state.language })

export default connect(mapStateToProps, { setWebLanguage })(LanguagesDropdown)
