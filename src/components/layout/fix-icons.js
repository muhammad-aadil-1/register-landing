import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import CallBackModal from "./../callback-modal"

const FixIconsSection = ({ callback, chat, userGuide }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <CallBackModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cbForm={callback.form}
        sideImage={callback.formImage}
      />
      <div className="quote-ribbon">
        <div className="first">
          <a
            href="javascript:$zopim.livechat.window.show();"
            id="ctabutton"
            title={chat.title[0].text}
            target="_self"
          >
            <strong>
              <img src={chat.icon.url} alt="ddd"/>
            </strong>
          </a>
        </div>
        <div className="second">
          <a
            data-toggle="modal"
            onClick={() => setModalShow(true)}
            id="ctabutton"
            title={callback.title[0].text}
            target="_self"
          >
            <strong>
              <img src={callback.icon.url} alt="ddd" />
            </strong>
          </a>
        </div>
        <div className="third">
          <Link to={userGuide.link[0].text} title={userGuide.title[0].text}>
            <strong>
              <img src={userGuide.icon.url} />
            </strong>
          </Link>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    language: state.language,
  }
}

export default connect(mapStateToProps)(FixIconsSection)
