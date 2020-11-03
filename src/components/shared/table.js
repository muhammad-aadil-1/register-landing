import React from "react"
import { Table as BTable } from "react-bootstrap"
/**
 * This component accepts just two parameters
 *
 * @param { header } array of strings
 * @param { body } array of array of strings
 */

const Table = ({ header = [], body = [] }) => {
  return (
    <section className="job-contents p-top-20 p-bottom-65">
      <div className="container pb-5">
        <div className="tables-responsive text-center shadowed-container">
          <BTable responsive="md" className="table-secondary table-secondary--darken">
            <thead >
              <tr>
                {header.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, index) => (
                <tr key={index}>
                  {row.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </BTable>
        </div>
      </div>
    </section>
  )
}

export default Table
