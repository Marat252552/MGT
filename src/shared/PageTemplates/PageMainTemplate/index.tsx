import React from 'react'
import styles from './lib/styles.module.css'
import Header from '../../../widgets/Header'

type Props_T = {
    children: any
}

class PageMainTemplate extends React.Component<Props_T> {
    render() {
        return <>
            <Header />
            <div className={styles.max_width_container}>
                <div className={styles.wrapper}>
                    {this.props.children}
                </div>
            </div>
        </>
    }
}

export default PageMainTemplate