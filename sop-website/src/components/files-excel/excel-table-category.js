import React from 'react'
import ExcelRowCategory from './excel-row-category';
import styles from './styles.module.css';

const ExcelHandleTable2 = ({ table, index }) => {

    // const Table = data[0]
    // console.dir(table)
    const Table = table
    const Category_name = Table.Category_name
    var color_P = index % 6

    function get_bg_color(a) {
        switch (a) {
            case 1:
                return { backgroundColor: '#ffc0cb', color: "#6B202B" };
            case 2:
                return { backgroundColor: '#A1C7E6', color: "#1A1157" };
            case 3:
                return { backgroundColor: '#F0EE6E', color: "#574A2E" };
            case 4:
                return { backgroundColor: '#BFB6F0', color: "#461857" };
            case 5:
                return { backgroundColor: '#F0A98D', color: "#46270B" };
            case 0:
                return { backgroundColor: '#A3F0C3', color: "#165731" };
            default:
                return { backgroundColor: '#ffc0cb', color: "#6B202B" }
        }
    }
    function get_sub_title_bg_color(a) {
        switch (a) {
            case 1:
                return { backgroundColor: '#FEEFEE' };
            case 2:
                return { backgroundColor: '#D3EDFF' };
            case 3:
                return { backgroundColor: '#FCFFDF' };
            case 4:
                return { backgroundColor: '#D4D5F3' };
            case 5:
                return { backgroundColor: '#F2D6CC' };
            case 0:
                return { backgroundColor: '#CAF0DA' };
            default:
                return { backgroundColor: '#FEEFEE' };
        }
    }

    const title_bg_color = get_bg_color(color_P)

    const sub_title_bg_color = get_sub_title_bg_color(color_P)

    return (
        <div className={styles.table} >
            <div className={`${styles.table_title} ${styles.row} `} style={title_bg_color}>{Category_name} </div>
            <div className={`${styles.content}`} >
                <div className={`${styles.row} ${styles.title_cell}`} style={sub_title_bg_color } >
                    <div className={`${styles.cell} ${styles.cellTable_name}`}>Table Name</div>
                    <div className={`${styles.cell} ${styles.cellDescription}`}>Description</div>
                    {/* <div className={`${styles.cell} ${styles.cellTags}`}>Tags</div> */}
                    <div className={`${styles.cell} ${styles.cellAction}`}>Action</div>
                </div >
                <div  >

                    {Table.Columns.map(row => (
                        <>
                            <ExcelRowCategory index={color_P} table={row} />
                        </>



                    ))}
                </div>

            </div>


        </div>
    )
}

export default ExcelHandleTable2
