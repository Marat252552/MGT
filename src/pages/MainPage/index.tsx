import React from 'react'
import PageMainTemplate from '../../shared/PageTemplates/PageMainTemplate'
import Card from '../../widgets/Card'
import { RootState } from '../../state/store';
import { Comment_T, Language_E, toggleLanguage } from '../../state/Reducers/CommentsReducer';
import { connect } from 'react-redux';
import CommentsModule from './elements/CommentsModule';
import NavigationBar from '../../ui/NavigationBar';

type Props_T = {
    ru: Comment_T[],
    en: Comment_T[],
    currentLanguage: Language_E
}

class MainPage extends React.Component<Props_T> {

    state = {
        offset: 0,
        max: 10,
        elementsTotal: 0,
        pagesTotal: 0,
        currentPage: 0,
    }

    componentDidMount(): void {
        const pagesTotal = Math.ceil(this.props.ru.length / 10)
        if (pagesTotal < 1) return
        this.setState({
            pagesTotal,
            currentPage: 1
        })
    }

    nextPage = () => {
        const { currentPage, pagesTotal, offset } = this.state
        const nextPage = currentPage + 1
        if (nextPage > pagesTotal) return
        this.setState({
            offset: offset + 10,
            currentPage: nextPage
        })
    }
    prevPage = () => {
        const { currentPage, offset } = this.state
        const prevPage = currentPage - 1
        if (prevPage <= 0) return
        this.setState({
            offset: offset - 10,
            currentPage: prevPage
        })
    }

    render() {
        const { max, offset, currentPage, pagesTotal } = this.state
        const { ru, en, currentLanguage } = this.props
        const requiredData = ((currentLanguage === Language_E.ru) ? ru : en).slice(offset, max + offset)
        return <>
            <PageMainTemplate>
                <Card
                    body={<>
                        <CommentsModule data={requiredData} />
                        <NavigationBar nextPage={this.nextPage} prevPage={this.prevPage} currentPage={currentPage} pagesTotal={pagesTotal} />
                    </>}
                    header='Наши отзывы'
                />
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
