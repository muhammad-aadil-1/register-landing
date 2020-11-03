import React, { useState } from "react"
import { connect, useSelector } from "react-redux"

import { Form, Button } from "react-bootstrap"
import { IMAGES } from "../../constants"
import { SUCCESS_MESSAGES, config } from "../../constants"
import { sendEmail } from "../../actions"

const Subscription = () => {
  const language = useSelector(state => state.language)
  const [email, setEmail] = useState("")


  const [message, setMessage] = useState(null)

  const handleSubmit = async e => {
    setMessage(null)
    e.preventDefault()
    try {
      await sendEmail("subscribe", { email })
      setMessage(SUCCESS_MESSAGES.SUBSCRIBE[language])
    } catch (error) {
      console.error(error)
    }
  }

  const lanLabel =
    language === config.englishLanguage
      ? "Enter your email to subscribe to our news"
      : "أدخل بريدك الإلكتروني للاشتراك في أخبارنا"
  return (
    <>
      <section
        className="subscribe-seven"
        style={{ backgroundImage: `url(${IMAGES.NEW_MAP_SMALL})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={{ top: "102px", margin: "auto" }}>
              <div className="text-center">
                <h2>
                  <span style={{ color: "#1371b8" }}> &nbsp; </span>
                </h2>
                <Form
                  onSubmit={handleSubmit}
                  className="subscribe-form-two p-left-50 p-right-50"
                >
                  <div>
                    <Form.Control
                      id="Txt_Subscribe_Email"
                      type="email"
                      className="form-control"
                      onChange={e => setEmail(e.target.value)}
                      placeholder={lanLabel}
                      aria-label="email"
                      required
                    />

                    {language === "en-us" && (
                      <Button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "white",
                          border: "unset",
                          right: "5rem",
                        }}
                      >
                        <div className="card123">
                          <img
                            src={IMAGES.SUBMIT_CLICK}
                            className="img-top"
                            alt="Card Front"
                          />
                        </div>
                      </Button>
                    )}
                    {language === "ar-ae" && (
                      <Button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "white",
                          border: "unset",
                          left: "5rem",
                        }}
                      >
                        <div className="card123">
                          <img
                            src={IMAGES.SUBMIT_CLICK}
                            className="img-top"
                            alt="Card Front"
                          />
                        </div>
                      </Button>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </div>

          <div style={{ clear: "both" }}></div>
          <div className="col-sm-12 text-center">
            {message ? (
              <div
                className="alert alert-success"
                style={{ width: "50%", margin: "auto", top: "8rem" }}
              >
                {message}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    language: state.language,
  }
}

export default connect(mapStateToProps)(Subscription)
