// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['']
      }
    })
});

const { dispatch } = store;

export { store, dispatch };
