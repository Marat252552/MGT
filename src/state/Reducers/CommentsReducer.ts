import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import data from '../data.json'

export type Comment_T = {
    key: string,
    data: {
        name: string,
        review: string,
        date: string
    }
}

export enum Language_E {
    en = 'en',
    ru = 'ru'
}

type initialState_T = {
    currentLanguage: Language_E,
    en: Comment_T[],
    ru: Comment_T[]
}

const ParseObjectToArray = (value: Language_E) => {
    return Object.entries(data[value]).map((el) => {
        const key = el[0]
        const { date, name, review } = el[1]
        return {
            key,
            data: { date, name, review }
        }
    })
}


let initialState: initialState_T = {
    currentLanguage: Language_E.ru,
    en: ParseObjectToArray(Language_E.en),
    ru: ParseObjectToArray(Language_E.ru)
}
// Создаем slice
const CommentsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleLanguage(state) {
            if(state.currentLanguage === Language_E.en) {
                state.currentLanguage = Language_E.ru
            } else {
                state.currentLanguage = Language_E.en
            }
        }
    }
})

export const { toggleLanguage } = CommentsSlice.actions

export default CommentsSlice