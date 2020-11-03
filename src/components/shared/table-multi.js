import React from "react"
import { Table as BTable } from "react-bootstrap"
/**
 * This component accepts just two parameters
 *
 * @param { header } array of strings
 * @param { body } array of array of strings
 */
import { Tab, Nav, Form, Button } from "react-bootstrap"
import TableContent from './table';
import { tableDataMapper, multiTableDataMapper } from "../../prismic/helpers"

const Table = ({  data={}, totalTables=[] }) => {
    const allTablesContent = [];
    const keys = Object.keys(data)

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        allTablesContent.push(tableDataMapper(data[key]))
    }

  return (
    <section className="job-contents p-top-20 p-bottom-65 tabbed-table">
      <div className="container">
        <div className="tables-responsive text-center">
        <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="0"
                    >
                      <Nav variant="pills" className="market-tab">
                        <Nav.Item className="links">
                        {totalTables.map((item, tablId) => <>
                            <Nav.Link className="item" eventKey={tablId}>
                                {item.table_name[0].text}
                            </Nav.Link></>)} 
                        </Nav.Item>
                        
                      </Nav>
                      <Tab.Content>
                        
                          {allTablesContent.map((table, tableId) => <>
                            <Tab.Pane eventKey={tableId}>
                                <TableContent header={table[0]} body={table[1]}/>
                            </Tab.Pane>
                          </>)}
                        
                      </Tab.Content>
                  
                    </Tab.Container>
        </div>
      </div>
    </section>
  )
}

export default Table
