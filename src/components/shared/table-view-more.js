import React from "react"
import { Table as BTable } from "react-bootstrap"
import { Link } from "gatsby"
/**
 * This component accepts just two parameters
 *
 * @param { header } array of strings
 * @param { body } array of array of strings
 */

const Table = ({ header = [], body = [], viewMoreLabel = [], viewMoreLink = [], title= '' }) => {
  return (
    <section className="job-contents p-top-20 p-bottom-65">
        <div className="tables-responsive text-center">
        <h4>{title}</h4>
          <BTable responsive="md" className="table-secondary--darken">
            <thead>
              <tr>
                {header.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, index) => (
                <>
                {/* {JSON.stringify(row)} */}
                {/* {index} */}
                    { index>-1 && index < 10 &&
                        <>
                            <tr key={index}>
                                {row.map((item, index) => (
                                <td key={index}>{item}</td>
                                ))}
                            </tr>
                        </>
                    }
                </>
              ))}
            </tbody>
          </BTable>
          <p className="has-orange-button">
              <Link to={viewMoreLink[0].text} >{viewMoreLabel[0].text}</Link>
          </p>
        </div>
    </section>
  )
}

export default Table
