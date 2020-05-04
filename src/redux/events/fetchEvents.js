import {
    eventContentReq,
    eventContentSuccess,
    eventContentFail,
} from './action'
import axios from 'axios'

function fetchProjectList() {
    return function (dispatch) {
        dispatch(eventContentReq())
        axios
            .get(`https://api.unsplash.com/photos`, {
                headers: {
                    Authorization:
                        'Client-ID 1f223c6e90302b311e7301eaeae057b33fff4d8880374e556b89da5fd3264c22',
                },
            })
            .then((response) => {
                console.log('I RECEIVED DATA FROM API')
                const eventsData = response.data.map((results) => results)
                dispatch(eventContentSuccess(eventsData))
            })
            .catch((error) => {
                dispatch(eventContentFail(error.message))
            })
    }
}

export default fetchProjectList
