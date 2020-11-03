export function tableDataMapper(table = []) {
  const tableHeader = []
  const tableBody = []
  table.forEach((data, index) => {
    if (index === 0) {
      data.items.map(item => {
        tableHeader.push(item.col[0].text)
        return tableHeader;
      })
    } else {
      const body = []
      data.items.map(item => {
        body.push(item.col[0].text);
        return body;
      })
      tableBody.push(body)
    }
    return true
  })

  return [tableHeader, tableBody]
}



export function multiTableDataMapper(table = []) {
    // console.log('huashdf ', total_tables, table[0].primary.table_number)
  const tableKeys = {};
  for (let index = 0; index < table.length; index++) {
    const element = table[index];
    const tableIndex = element.primary ? element.primary.table_number ?  element.primary.table_number: 1 : 1;
    if( !tableKeys[tableIndex] ){
      tableKeys[tableIndex] = []
    }
    tableKeys[tableIndex].push(element)
  }

  console.log('tableKeys ', tableKeys)

  return tableKeys;
}
