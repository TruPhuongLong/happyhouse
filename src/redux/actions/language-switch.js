import {LANGUAGE_SWITCH} from './type'

export const languageSwitch = (index) => {
    return {
        type: LANGUAGE_SWITCH,
        payload: index
    }
}