import {
    EVENTS_CONTENT_REQ,
    EVENTS_CONTENT_SUCCESS,
    EVENTS_CONTENT_FAIL,
} from './type'

const initialState = {
    eventsContent: [],
    loadign: false,
    error: '',
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EVENTS_CONTENT_REQ:
            return {
                ...state,
                loading: true,
            }
        case EVENTS_CONTENT_SUCCESS:
            return {
                ...state,
                loadign: false,
                eventsContent: action.payload,
                error: '',
            }
        case EVENTS_CONTENT_FAIL: {
            return {
                ...state,
                loadign: false,
                eventsContent: [],
                error: action.error,
            }
        }
        default:
            return {
                state,
            }
    }
}

export default eventsReducer
