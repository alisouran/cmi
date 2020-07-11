import {
    SPEAKERS_CONTENT_REQ,
    SPEAKERS_CONTENT_SUCCESS,
    SPEAKERS_CONTENT_FAIL,
    LOADING_FALSE,
} from './type'

const initialState = {
    speakersContent: [],
    loading: true,
    error: '',
}

const speakerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPEAKERS_CONTENT_REQ:
            return {
                ...state,
                loading: true,
            }
        case SPEAKERS_CONTENT_SUCCESS:
            return {
                ...state,
                loading: true,
                speakersContent: [...state.speakersContent, ...action.payload],
                error: '',
            }
        case SPEAKERS_CONTENT_FAIL: {
            return {
                ...state,
                loading: false,
                speakersContent: [],
                error: action.error,
            }
        }
        case LOADING_FALSE: {
            return {
                ...state,
                loading: false,
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default speakerReducer
