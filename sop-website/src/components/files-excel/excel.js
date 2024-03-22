import React from 'react'
import ExcelHandleTable2 from './excel-table-category'
// import data from './menu-json.json'


const Excel = (datas) => {
  var index = 0;

  return (
    <div>
      {datas.datas.map(data =>{
        index = index + 1;
        return (<ExcelHandleTable2 table={data} index = {index} />)
      }
        )}
 
    </div>
  )
}

export default Excel;
