import React from 'react'
import ExcelRow from './excel-row';
import styles from './styles.module.css';

const ExcelHandleTable3 = ({index,table}) => {
    // const Table = data[0]
    const Table = table
    const Table_name = Table.Table_name
    const color_P = index
    console.dir(color_P)

    const title_bg_color = { backgroundColor: '#D9D9D9', color: "black" }
    const sub_title_bg_color = { backgroundColor: '#F2F2F2'}

    return (
        <div className={styles.table} style={{minWidth:"56rem"}}>
        <div className={`${styles.table_title} ${styles.row}`} style={title_bg_color}>{Table_name} </div>
        <div className={`${styles.content}`} >
            <div className={`${styles.row} ${styles.title_cell}`} style={sub_title_bg_color}>
                <div className={`${styles.cell} ${styles.cellTable_name}`}>Column Name</div>
                <div className={`${styles.cell} ${styles.cellDescription}`}>Description</div>
                <div className={`${styles.cell} ${styles.cellColumn_Type}`}>Column Type</div>
                <div className={`${styles.cell} ${styles.cellRequired}`}>Required</div>
                {/* <div className={`${styles.cell} ${styles.cellIndicator}`}>Indicator</div>
                <div className={`${styles.cell} ${styles.cellTags}`}>Action</div> */}
            </div >
            <div  >

                {Table.Columns.map(row => (
                    <ExcelRow table={row} />

                ))}
            </div>

        </div>


    </div>
    )
}

export default ExcelHandleTable3
