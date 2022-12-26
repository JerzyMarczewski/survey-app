import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  completedSurveys: [],
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addCompletedSurvey: (state, action) => {
      state.completedSurveys.push(action.payload);
    },
  },
});

export const { setName, addCompletedSurvey } = currentUserSlice.actions;

export default currentUserSlice.reducer;
