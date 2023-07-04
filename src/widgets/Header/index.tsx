import React from "react";
import styles from './lib/styles.module.css'
import Clock from "../../ui/Clock";
import ButtonList from "../../ui/ToggleButton";
import ToggleLanguageButton from "../../features/ToggleLanguageButton";


class Header extends React.Component {

    render() {
        return <div className={styles.container}>
            <div className={styles.clock_container}>
                <Clock />
            </div>

            <div className={styles.buttonList_container}>
                <ToggleLanguageButton />
            </div>

        </div>
    }
}

export default Header