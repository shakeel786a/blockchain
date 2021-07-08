import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { reducers } from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['web']
}

const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }
