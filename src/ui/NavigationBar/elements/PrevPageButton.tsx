import React from 'react'
import styles from './../lib/styles.module.css'
import FilledButton from '../../FilledButton'

type Props_T = {
    currentPage: number,
    prevPage: () => void
}

class PrevPageButton extends React.Component<Props_T> {
    render() {
        const { currentPage, prevPage } = this.props
        return <div className={styles.pageButton_container}>
            {
                (currentPage !== 1) ?
                    <div
                        onClick={prevPage}
                        className={styles.pageButton}>
                            <FilledButton text='Назад'/>
                        </div>
                    :
                    undefined
            }
        </div>
    }
}

export default PrevPageButton