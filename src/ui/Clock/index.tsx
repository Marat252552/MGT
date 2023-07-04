import React from 'react'
import styles from './lib/styles.module.css'


class Clock extends React.Component {

    state = {
        time: new Date()
    }

    private addZero = (seconds: number) => {
        if (seconds < 10) return `0${seconds}`
        return seconds
    }

    private updateTime = () => {
        this.setState({ time: new Date() });
    };

    private updateTimeRecursively() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
    }

    componentDidMount = () => {
        this.updateTimeRecursively();
    };
    render() {
        return <div className={styles.container}>
            <div className={styles.numberContainer}>
                <span className={styles.number}>{this.addZero(this.state.time.getHours())}</span>
            </div>

            <span className={styles.number}>:</span>

            <div className={styles.numberContainer}>
                <span className={styles.number}>{this.addZero(this.state.time.getMinutes())}</span>
            </div>

            <span className={styles.number}>:</span>

            <div className={styles.numberContainer}>
                <span className={styles.number}>{this.addZero(this.state.time.getSeconds())}</span>
            </div>
        </div>
    }
}

export default Clock