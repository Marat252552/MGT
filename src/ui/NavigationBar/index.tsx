import React from 'react'
import styles from './lib/styles.module.css'
import NextPageButton from './elements/NextPageButton'
import PrevPageButton from './elements/PrevPageButton'

type Props_T = {
    pagesTotal: number,
    currentPage: number,
    nextPage: () => void,
    prevPage: () => void
}


class NavigationBar extends React.Component<Props_T> {
    render() {
        const { currentPage } = this.props
        return <div className={styles.container}>
            
            <PrevPageButton {...this.props} />

            <div>{currentPage}</div>

            <NextPageButton {...this.props} />

        </div >
    }
}

export default NavigationBar