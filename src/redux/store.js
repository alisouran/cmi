import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import eventsReducer from './events/reducer'
import speakersReducer from './speakers/reducer'
import fetchEvents from './events/fetchEvents'
import thirtysecondReducer from './thirtysecond/reducer'

const rootReducer = combineReducers({
    events: eventsReducer,
    speakers: speakersReducer,
    thirtysecond: thirtysecondReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {})
store.dispatch(fetchEvents())

export default store
