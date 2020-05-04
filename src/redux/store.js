import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import eventsReducer from './events/reducer'
import fetchEvents from './events/fetchEvents'

const rootReducer = combineReducers({
    events: eventsReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchEvents())

export default store
