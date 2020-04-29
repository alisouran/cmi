import { createStore, applyMiddleware, combineReducers } from 'redux'
import eventsReducer from './events/reducer'

const rootReducer = combineReducers({
    events: eventsReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})

export default store
