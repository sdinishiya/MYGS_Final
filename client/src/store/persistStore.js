import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage/session";
import authReducer from "./reducer/authReducer";
import { crossBrowserListener } from "./config/persistListener";

const allPersistReducers = combineReducers({
  authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allPersistReducers);

export const reduxPersistStore = createStore(
  persistedReducer,
);

window.addEventListener(
  "storage",
  crossBrowserListener(reduxPersistStore, persistConfig)
);

export const persistedStore = persistStore(reduxPersistStore);
