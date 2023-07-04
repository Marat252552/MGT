import React from "react";
import styles from './../lib/styles.module.css'
import FilledButton from "../../FilledButton";

type Props_T = {
    pagesTotal: number,
    currentPage: number,
    nextPage: () => void
}

class NextPageButton extends React.Component<Props_T> {
    render() {
        const { currentPage, pagesTotal, nextPage } = this.props
        return <div className={styles.pageButton_container}>
            {
                (currentPage !== pagesTotal) ?

                    <div
                        onClick={nextPage}
                        className={styles.pageButton}>
                        <FilledButton text="Далее" />
                    </div>
                    :
                    undefined
            }
        </div>
    }
}

export default NextPageButton