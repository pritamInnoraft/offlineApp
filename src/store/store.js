import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk"
import rootReducer from "./reducers";
import createEncryptor from 'redux-persist-transform-encrypt'


const encryptor = createEncryptor({
    secretKey: 'my-super-secret-key',
})

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptor
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
export const persistor = persistStore(store)