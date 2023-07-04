import React from 'react'
import styles from './lib/styles.module.css'

type Props_T = {
    name: string,
    review: string,
    date: string
}

class Comment extends React.Component<Props_T> {
    render() {
        const { date, name, review } = this.props
        return <div className={styles.container}>
            <div className={styles.header_module}>
                <span style={{fontWeight: '500'}}>{name}</span>
                <span>{date}</span>
            </div>

            <div>
                {review}
            </div>
        </div>
    }
}

export default Comment