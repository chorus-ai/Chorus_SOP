import { Button } from 'antd';
import React, { useState } from 'react'
import ExcelHandleTable3 from './excel-table-table';
import styles from './styles.module.css';
const ExcelRowCategory = ({ table, title_bg_color, sub_title_bg_color }) => {

  const row = table
  const [showSub, setShowSub] = useState(false)
  const clickTheButton = () => {
    setShowSub(!showSub)
  }

  const [showDetails, setShowDetails] = useState(false)
  const showTheRowDetails = () => {
    setShowDetails(!showDetails)
  }

  return (

    <div>
      <div>

        <div className={` ${styles.content} ${styles.row}`} style={{ backgroundColor: "white" }}>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellTable_name}`}>
            {row.Table_name}

          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellDescription}`}>
            {!showDetails && (row.Description.length < 120) && row.Description}
            {!showDetails && row.Description.length >= 120 && <>{row.Description.slice(0, 120)}<span>...</span><div onClick={showTheRowDetails} style={{ color: '#0584B3', fontWeight: "600", fontStyle: "italic", marginTop: "0.2rem", marginLeft: '0.2rem', display: "inline-block" }}>Show More↓</div></>}
            {showDetails && <><span style={{ textIndent: "0" }}>{row.Description}</span><div onClick={showTheRowDetails} style={{ color: '#0584B3', fontWeight: "600", fontStyle: "italic", marginTop: "0.2rem", marginLeft: '0.2rem', display: "inline-block" }}>Show Less↑</div></>}
          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellAction}`}>

            {row.Columns != null && <Button className={`${styles.cellActionTag}`} onClick={clickTheButton}>Show Table</Button>}
          </div>
        </div>

      </div>


      {showSub && <div className={`${styles.subTable}`}><ExcelHandleTable3 table={row} > </ExcelHandleTable3> </div>}


    </div>
  )
}

export default ExcelRowCategory
