import React from 'react'
import styles from './lib/styles.module.css'


type Props_T = {
    value: string
}

class ToggleButton extends React.Component<Props_T> {
    
    render() {
        return <div className={styles.container}>
            {this.props.value}
        </div>
    }
}

export default ToggleButton