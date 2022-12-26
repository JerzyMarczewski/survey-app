import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "survey 1",
    elements: [
      {
        name: "FirstName",
        title: "Enter your first name:",
        type: "text",
      },
      {
        name: "LastName",
        title: "Enter your last name:",
        type: "text",
      },
    ],
  },
  {
    id: "1",
    name: "survey 2",
    elements: [
      {
        name: "FirstName",
        title: "Enter your first name:",
        type: "text",
      },
      {
        name: "LastName",
        title: "Enter your last name:",
        type: "text",
      },
    ],
  },
];

export const surveysSlice = createSlice({
  name: "surveys",
  initialState,
  reducers: {},
});

export default surveysSlice.reducer;
