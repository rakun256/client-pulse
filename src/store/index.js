import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dashboardReducer from "../features/dashboard/dashboardSlice";
import customersReducer from "../features/customers/customerSlice"

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    dashboard: dashboardReducer,
    customers: customersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
