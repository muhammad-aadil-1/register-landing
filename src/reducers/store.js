import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

import themeReducer from "./index"
const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, themeReducer)

// const store = createStore(themeReducer);
// export default store;

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
