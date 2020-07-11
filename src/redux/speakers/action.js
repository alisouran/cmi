import {
    SPEAKERS_CONTENT_REQ,
    SPEAKERS_CONTENT_SUCCESS,
    SPEAKERS_CONTENT_FAIL,
    LOADING_FALSE,
} from './type'

export const speakersContentReq = () => {
    return {
        type: SPEAKERS_CONTENT_REQ,
    }
}

export const speakersContentSuccess = (data) => {
    return {
        type: SPEAKERS_CONTENT_SUCCESS,
        payload: data,
    }
}

export const speakersContentFail = (error) => {
    return {
        type: SPEAKERS_CONTENT_FAIL,
        payload: '',
        error: error,
    }
}

export const isLoadingFalse = () => {
    return {
        type: LOADING_FALSE,
    }
}
