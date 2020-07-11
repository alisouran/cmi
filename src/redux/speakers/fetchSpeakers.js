import {
    speakersContentReq,
    speakersContentSuccess,
    speakersContentFail,
    isLoadingFalse,
} from './action'
import axios from 'axios'
let o = 0
let ids = []
let dontDispatch = false
function fetchSpeakers(eventsId, length) {
    return function (dispatch) {
        dispatch(speakersContentReq())
        axios
            .get(`http://cmisfahan.ir/api/speaker/${eventsId}`)
            .then((response) => {
                const Data = response.data.map((results) => results)
                Data.map((datas) => (datas.id = eventsId))
                ids.map((i) => {
                    if (i === Data[0].event_number) {
                        return (dontDispatch = true)
                    }
                    return null
                })
                if (dontDispatch === false) {
                    ids.push(Data[0].event_number)
                    dispatch(speakersContentSuccess(Data))
                    o += 1
                    if (length === o) {
                        dispatch(isLoadingFalse())
                    }
                }
            })
            .catch((error) => {
                dispatch(speakersContentFail(error.message))
            })
    }
}

export default fetchSpeakers
