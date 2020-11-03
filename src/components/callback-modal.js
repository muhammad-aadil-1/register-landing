import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Modal, Button, Form } from "react-bootstrap"
import { AddFormFields } from "./../components/shared"
// import { Tab, Tabs, Row, Nav, Col, Form } from 'react-bootstrap'

import { sendEmail } from "../actions"
import { SUCCESS_MESSAGES } from "../constants"

const CallBackModal = props => {
  const { cbForm, sideImage } = props
  const heading = cbForm.body[0]
  const fields = cbForm.body[1]

  const language = useSelector(state => state.language)

  const [formData, updateFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = e => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = async e => {
    setIsLoading(true)
    setMessage(null)
    e.preventDefault()
    try {
      await sendEmail("callback", formData)
      setMessage(SUCCESS_MESSAGES.EMAIL_SENT[language])
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0 callback-modal">
        {/* <DynamicForm content={[fields]}/> */}

        <div className="col-md-12 p-0">
          <div className="row  p-0 m-0">
            <div className="col-md-6 p-0">
              <div className="Popup-Left-img">
                <img
                  src={sideImage.url}
                  className="img-responsive"
                  width="401px"
                  height="499px"
                  alt="ddd"
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div
                className="modal-header"
                style={{
                  background: "linear-gradient(to right, #101028, #1a75bb)",
                }}
              >
                <h5
                  className="modal-title"
                  style={{ color: "white" }}
                  id="modal-centerLabel"
                >
                  {heading.primary.group_title[0].text}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={props.onHide}
                >
                  <span aria-hidden="true" style={{ color: "white" }}>
                    ×
                  </span>
                </button>
              </div>
              <h5 className="mt-3 mb-1 text-center">
                {fields.primary.group_title[0].text}
              </h5>
              {message ? (
                <div className="alert alert-success">{message}</div>
              ) : (
                ""
              )}
              <Form
                id="callback_request_form"
                className="p-3"
                onSubmit={handleSubmit}
              >
                <AddFormFields
                  data={fields.items}
                  display={"inline"}
                  label={"none"}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-rounded btn-block mt-4"
                  size="md"
                  block
                  onclick="CallBackRequestSubmit();"
                >
                  {cbForm.submit_button_text[0].text}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
    </Modal>
  )
}

export default CallBackModal
