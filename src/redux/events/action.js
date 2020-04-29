import {
    EVENTS_CONTENT_REQ,
    EVENTS_CONTENT_SUCCESS,
    EVENTS_CONTENT_FAIL,
} from './type'

export const eventContentReq = () => {
    return {
        type: EVENTS_CONTENT_REQ,
    }
}

export const eventContentSuccess = (data) => {
    return {
        type: EVENTS_CONTENT_SUCCESS,
        payload: data,
        error: '',
    }
}

export const eventContentFail = (error) => {
    return {
        type: EVENTS_CONTENT_FAIL,
        payload: '',
        error: error,
    }
}
