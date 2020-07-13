import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persitedReducer = persistReducer(
    {
      key: 'biblioteca_supero',
      storage,
      whitelist: ['theme'],
    },
    reducers
  )

  return persitedReducer
}
