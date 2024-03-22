import { Button } from 'antd';
import React, { useState } from 'react'
import ExcelTag from './excel-tag';
import styles from './styles.module.css';
const ExcelRow = ({ table }) => {

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
        <div className={` ${styles.content} ${styles.row}`} style={{backgroundColor:"white"}}>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellTable_name}`}>
            {row.Column_name}

          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellDescription}`}>
            {row.Description.length > 106 ? row.Description.slice(0, 106) : row.Description}
            {row.Description.length > 107 && !showDetails && <><span>...</span><div onClick={showTheRowDetails} style={{ color: '#07AAE6', fontWeight: "600", fontStyle: "italic" }}>Show More↓</div></>} &nbsp;
            {showDetails && <><span>{row.Description.slice(107)}</span><div onClick={showTheRowDetails} style={{ color: '#07AAE6', fontWeight: "600", fontStyle: "italic" }}>Show Less↑</div></>}


          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellColumn_Type}`}>{row.Column_Type}</div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellRequired}`}>{row.Required}</div>
          {/* <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellIndicator}`}>{row.Indicators.map(indicator => <ExcelTag Tag={indicator}></ExcelTag>)}</div> */}
          {/* <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellAction}`}> */}

            {/* {row.Data != null && <Button className={`${styles.cellActionTag}`} onClick={clickTheButton}>Show Statistics</Button>}
            {row.Description.length > 107 && !showDetails && <><span>...</span><div type='dashed' onClick={showTheRowDetails} style={{ color: '#07AAE6', fontWeight: "600", fontStyle: "italic" }}>Show More↓</div></>} &nbsp;
            {showDetails && <><span>{row.Description.slice(107)}</span><div type='dashed' onClick={showTheRowDetails} style={{ color: '#07AAE6', fontWeight: "600", fontStyle: "italic" }}>Show Less↑</div></>}


          </div> */}
        </div>

      </div>

      {showSub && <div className={`${styles.subTable}`}> {row.Data}</div>}


    </div>
  )
}

export default ExcelRow
