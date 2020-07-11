import {
    THIRTYSECOND_CONTENT_REQ,
    THIRTYSECOND_CONTENT_SUCCESS,
    THIRTYSECOND_CONTENT_FAIL,
    LOADING_FALSE,
} from './type'

const initialState = {
    thirtysecondContent: [],
    loading: true,
    error: '',
}

const thirtysecondReducer = (state = initialState, action) => {
    switch (action.type) {
        case THIRTYSECOND_CONTENT_REQ:
            return {
                ...state,
                loading: true,
            }
        case THIRTYSECOND_CONTENT_SUCCESS:
            return {
                ...state,
                loading: true,
                thirtysecondContent: [
                    ...state.thirtysecondContent,
                    ...action.payload,
                ],
                error: '',
            }
        case THIRTYSECOND_CONTENT_FAIL: {
            return {
                ...state,
                loading: false,
                thirtysecondContent: [],
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

export default thirtysecondReducer
