import React from 'react'
import styles from './styles.module.css';

const ExcelTag = ({ Tag }) => {
  return (
    <>
      {(() => {
        switch (Tag) {
          case 'Heart':
            return (
              <div className={` ${styles.cellTag} ${styles.cellTag_red}`}>
                {Tag}
              </div>
            );
          case 'Lung':
            return (
              <div className={` ${styles.cellTag} ${styles.cellTag_green}`}>
                {Tag}
              </div>

            );
            default:
              return (
                <div className={` ${styles.cellTag} ${styles.cellTag_blue}`}>
                  {Tag}
                </div>
  
              );


        }
      })()}
    </>
  )


}

export default ExcelTag
