import React from 'react'
import { Comment_T } from '../../../state/Reducers/CommentsReducer'
import Comment from '../../../entities/Comment'
import styles from './../lib/styles.module.css'

type Props_T = {
    data: Comment_T[]
}


class CommentsModule extends React.Component<Props_T> {
    render() {
        const { data } = this.props
        return <div className={styles.comments_module}>
            {data.map(el => {
                const { date, name, review } = el.data
                return <Comment date={date} name={name} review={review} key={el.key} />
            })}
        </div>
    }
}

export default CommentsModule