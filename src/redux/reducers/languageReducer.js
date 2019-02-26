import initState from '../store/state'
import {
    LANGUAGE_SWITCH
} from '../actions/type'

export default (state = initState.languageState, action) => {
    switch(action.type){
        case LANGUAGE_SWITCH:
        //payload will contain index of language
            return {
                ...state,
                currentIndex: action.payload
            }
        default: return state
    }
}
