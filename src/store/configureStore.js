import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import { reducers } from '../reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['web', 'admin'],
    timeout: 7000
}

const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }
