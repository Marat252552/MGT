import React from 'react'
import PageMainTemplate from '../../shared/PageTemplates/PageMainTemplate'
import Card from '../../widgets/Card'
import { RootState } from '../../state/store';
import { Comment_T, Language_E, toggleLanguage } from '../../state/Reducers/CommentsReducer';
import { connect } from 'react-redux';
import CommentsModule from './elements/CommentsModule';

type Props_T = {
    ru: Comment_T[],
    en: Comment_T[],
    currentLanguage: Language_E
}

class MainPage extends React.Component<Props_T> {

    render() {
        const { ru, en, currentLanguage } = this.props
        const requiredData = (currentLanguage === Language_E.ru)? ru : en 
        return <>
            <PageMainTemplate>
                <Card
                    body={<CommentsModule data={requiredData} />}
                    header='Наши отзывы' />
            </PageMainTemplate>
        </>
    }
}

const mapStateToProps = (state: RootState) => ({
    ru: state.commentsReducer.ru,
    en: state.commentsReducer.en,
    currentLanguage: state.commentsReducer.currentLanguage
});

const mapDispatchToProps = { toggleLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
