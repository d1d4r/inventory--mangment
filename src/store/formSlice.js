import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
  fields: {},
};

export const formSlice = createSlice({
  name: "formStatus",
  initialState,
  reducers: {
    isAdd: (state) => {
      state.value = true;
    },
    isUpdate: (state) => {
      state.value = false;
    },
    updateFields: (state, action) => {
      state.fields = action.payload;
    },
  },
});

export const { isAdd, isUpdate, updateFields } = formSlice.actions;

export default formSlice.reducer;
