import React from "react"
import { Form } from "react-bootstrap"

const AddFormFields = ({
  data = [],
  display = "",
  row = false,
  label = "",
  onChange = () => {},
}) => {
  return (
    <>
      {data.map((item, index) => (
        <Form.Group key={'sdf-'+index}
          style={{ display: display }}
          key={"form-group-" + index}
          className={row ? "row" : ""}
        >
          <Form.Label
            style={{ display: label }}
            className={row ? "col-md-3" : ""}
          >
            {item.field_label[0].text}
            <span className="sup text-danger">
              {item.field_required ? "*" : ""}
            </span>
          </Form.Label>

          {(item.field_type[0].text === "text" && (
            <Form.Control
              className={row ? "col-md-9" : ""}
              name={item.field_name[0].text}
              onChange={onChange}
              placeholder={
                item.field_placeholder[0] ? item.field_placeholder[0].text : ""
              }
              required={item.field_required ? "required" : ""}
            />
          )) ||
            (item.field_type[0].text === "number" && (
              <Form.Control
                type="number"
                className={row ? "col-md-9" : ""}
                name={item.field_name[0].text}
                onChange={onChange}
                placeholder={
                  item.field_placeholder[0]
                    ? item.field_placeholder[0].text
                    : ""
                }
                required={item.field_required ? "required" : ""}
              />
            )) ||
            (item.field_type[0].text === "email" && (
              <Form.Control
                type="email"
                className={row ? "col-md-9" : ""}
                name={item.field_name[0].text}
                onChange={onChange}
                placeholder={
                  item.field_placeholder[0]
                    ? item.field_placeholder[0].text
                    : ""
                }
                required={item.field_required ? "required" : ""}
              />
            )) ||
            (item.field_type[0].text === "textarea" && (
              <Form.Control
                className={row ? "col-md-9" : ""}
                name={item.field_name[0].text}
                onChange={onChange}
                as="textarea"
                placeholder={
                  item.field_placeholder[0]
                    ? item.field_placeholder[0].text
                    : ""
                }
                required={item.field_required ? "required" : ""}
              />
            )) ||
            (item.field_type[0].text === "dropdown" && (
              <Form.Control
                className={row ? "col-md-9" : ""}
                name={item.field_name[0].text}
                as="select"
                onChange={onChange}
              >
                <option>{item.field_placeholder[0].text}</option>
                {item.options.map((option, index) => (
                  <option value={option.text} key={"option-" + index}>
                    {option.text}
                  </option>
                ))}
              </Form.Control>
            ))}
        </Form.Group>
      ))}
    </>
  )
}

export default AddFormFields
