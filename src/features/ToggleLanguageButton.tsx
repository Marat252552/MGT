import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../state/store';
import { Language_E, toggleLanguage as toggleLanguageAC } from '../state/Reducers/CommentsReducer';
import FilledButton from '../ui/FilledButton';

type Props_T = {
    toggleLanguageAC: () => void,
    currentLanguage: Language_E
}

class ToggleLanguageButton extends React.Component<Props_T> {

    render() {
        const currentLanguage = this.props.currentLanguage
        return <div onClick={() => this.props.toggleLanguageAC()}>
            <FilledButton text={currentLanguage}/>
        </div>
    }
}

const mapStateToProps = (state: RootState) => ({
    ru: state.commentsReducer.ru,
    en: state.commentsReducer.en,
    currentLanguage: state.commentsReducer.currentLanguage
});

const mapDispatchToProps = { toggleLanguageAC };

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLanguageButton);