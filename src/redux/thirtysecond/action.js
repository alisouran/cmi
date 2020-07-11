import {
    THIRTYSECOND_CONTENT_REQ,
    THIRTYSECOND_CONTENT_SUCCESS,
    THIRTYSECOND_CONTENT_FAIL,
    LOADING_FALSE,
} from './type'

export const thirtysecondContentReq = () => {
    return {
        type: THIRTYSECOND_CONTENT_REQ,
    }
}

export const thirtysecondContentSuccess = (data) => {
    return {
        type: THIRTYSECOND_CONTENT_SUCCESS,
        payload: data,
    }
}

export const thirtysecondContentFail = (error) => {
    return {
        type: THIRTYSECOND_CONTENT_FAIL,
        payload: '',
        error: error,
    }
}

export const isLoadingFalse = () => {
    return {
        type: LOADING_FALSE,
    }
}
