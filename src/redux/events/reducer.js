import {
    EVENTS_CONTENT_REQ,
    EVENTS_CONTENT_SUCCESS,
    EVENTS_CONTENT_FAIL,
} from './type'

const initialState = {
    eventsContent: [],
    loading: true,
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
                loading: false,
                eventsContent: action.payload,
                error: '',
            }
        case EVENTS_CONTENT_FAIL: {
            return {
                ...state,
                loading: false,
                eventsContent: [],
                error: action.error,
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default eventsReducer
