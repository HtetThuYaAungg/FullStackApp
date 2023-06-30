import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postsReducer from '../features/postsSlice'
import thunkMiddleware from "redux-thunk";
import { Middleware } from "@reduxjs/toolkit";

const middleware: Middleware[] = [...getDefaultMiddleware(), thunkMiddleware];

export const store = configureStore({
  reducer: {
    posts : postsReducer,
  },
  middleware,
});