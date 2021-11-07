import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import contactReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

// console.log(process.env.NODE_ENV);

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const rootReducer = combineReducers({
  // contacts: contactReducer,
  items: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, rootReducer),
  },
  // reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store); //обертка над сторам котор будет реализ обновл и запись локалстораджа
// ------------------------------------------
// персисты заменяют локалстораж
