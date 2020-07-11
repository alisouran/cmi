import {
    thirtysecondContentReq,
    thirtysecondContentSuccess,
    thirtysecondContentFail,
    isLoadingFalse,
} from './action'
import axios from 'axios'
let o = 0
let ids = []
let dontDispatch = false
function fetchThirtysecond(eventsId, length) {
    return function (dispatch) {
        dispatch(thirtysecondContentReq())
        axios
            .get(`https://cmisfahan.ir/api/thirtysecond/${eventsId}`)
            .then((response) => {
                const Data = response.data.map((results) => results)
                Data.map((datas) => (datas.id = eventsId))

                ids.map((i) => {
                    if (Data[0] !== undefined) {
                        if (i === Data[0].slug) {
                            dontDispatch = true
                        }
                    }
                    return null
                })
                if (Data[0] !== undefined) {
                    if (dontDispatch === false) {
                        ids.push(Data[0].slug)
                        dispatch(thirtysecondContentSuccess(Data))
                        o += 1
                        if (length === o) {
                            dispatch(isLoadingFalse())
                        }
                    }
                }
            })
            .catch((error) => {
                dispatch(thirtysecondContentFail(error.message))
            })
    }
}

export default fetchThirtysecond
