import {
    eventContentReq,
    eventContentSuccess,
    eventContentFail,
} from './action'
import axios from 'axios'
function fetchEvents() {
    return function (dispatch) {
        dispatch(eventContentReq())
        axios
            .get(`http://cmisfahan.ir/api/events/`)
            .then((response) => {
                const eventsData = response.data.map((results) => results)
                dispatch(eventContentSuccess(eventsData))
            })
            .catch((error) => {
                dispatch(eventContentFail(error.message))
            })
    }
}

export default fetchEvents
