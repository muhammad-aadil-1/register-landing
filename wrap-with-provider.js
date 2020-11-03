import React from "react"
import { Provider } from "react-redux"

import configStoreFunction from "./src/reducers/store"
import { PersistGate } from "redux-persist/integration/react"

const configStore = configStoreFunction()
// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // return <Provider store={store}>{element}</Provider>
  return (
    <Provider store={configStore.store}>
      <PersistGate loading={null} persistor={configStore.persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}
