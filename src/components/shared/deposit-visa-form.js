import React, { useState, useRef } from "react"
import { Form } from "react-bootstrap"
import { AddFormFields } from "../../components/shared"
import { payQubePay, cashuCode } from "../../actions"
import Helmet from "react-helmet"
import { config } from "../../constants"

const DepositVisaForm = ({ data = {}, paymentType = null }) => {
  const [showFormNumber, setShowFormNumber] = useState(1)
  const [form1Response, setForm1Response] = useState(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)
  const [cashuCodeResponse, setCashuCodeResponse] = useState(null)

  const [errQubePay, setErrQubePay] = useState("")
  const [errCashu, setErrCashu] = useState("")

  const pcashu = useRef()

  const { items } = data.body[0]
  const [formData, updateFormData] = React.useState({})
  const handleChange = e => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    let params = formData
    try {
      if (paymentType === "cashu") {
        try {
          let { result } = await cashuCode(params)
          setCashuCodeResponse(result)
          pcashu.current.click()
        } catch (error) {
          setErrCashu(error.message)
        }
      } else {
        try {
          let d = await payQubePay(params)
          setShowFormNumber(2)
          setForm1Response(d.result)
        } catch (error) {
          setErrQubePay(error.message)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleScriptInject = async addedTags => {
    if (addedTags) setScriptsLoaded(true)
  }

  return (
    <>
      {showFormNumber === 1 && (
        <>
          <Form onSubmit={handleSubmit.bind(this)}>
            <AddFormFields data={items} label="none" onChange={handleChange} />
            <div className="form-group text-center m-top-30 m-bottom-20">
              <button className="btn btn-secondary" type="submit">
                {data.submit_button_text[0].text}
              </button>
            </div>
            {errQubePay !== "" && (
              <div className="alert alert-danger" role="alert">
                {errQubePay}
              </div>
            )}
            {errCashu !== "" && (
              <div className="alert alert-danger" role="alert">
                {errCashu}
              </div>
            )}
          </Form>
          {cashuCodeResponse && (
            <form
              action={config.CASHU_CHECKOUT_URL}
              method="post"
              style={{ display: "none" }}
            >
              <input
                type="hidden"
                name="Transaction_Code"
                value={cashuCodeResponse.checkoutId}
              />
              <input
                type="submit"
                ref={pcashu}
                name="but"
                value="Pay with CASHU!"
              />
            </form>
          )}
        </>
      )}
      {showFormNumber === 2 && form1Response !== null && (
        <>
          <Helmet
            script={[
              {
                src:
                  config.QUBEPAY_CHECKOUT_URL +
                  "paymentWidgets.js?checkoutId=" +
                  form1Response.checkoutId,
              },
            ]}
            onChangeClientState={(newState, addedTags) =>
              handleScriptInject(addedTags)
            }
          />
          {scriptsLoaded === false && <p>Loading Scripts</p>}
          <form
            style={{ minHeight: "10rem" }}
            action={form1Response.redirect}
            className="paymentWidgets"
            data-brands="VISA MASTER"
          ></form>
        </>
      )}
    </>
  )
}

export default DepositVisaForm
