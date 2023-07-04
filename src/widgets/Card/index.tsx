import React from 'react'
import styles from './lib/styles.module.css'

type Props_T = {
    header: string,
    body: any
}

class Card extends React.Component<Props_T> {
    render() {
        const {body, header} = this.props
        return <div className={styles.container}>

            <div className={styles.header_module}>
                {header}
            </div>

            <div className={styles.body_module}>
                {body}
            </div>

        </div>
    }
}

export default Card