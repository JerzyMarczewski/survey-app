import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser/currentUserSlice";
import surveysReducer from "../features/surveys/surveysSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    surveys: surveysReducer,
  },
});
