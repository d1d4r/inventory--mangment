import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import formStatusReducer from "./formSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    formStatus: formStatusReducer,
  },
});
