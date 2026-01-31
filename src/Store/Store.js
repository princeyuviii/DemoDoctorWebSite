import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../Slice/DoctorSlice";

export const Store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});

export default Store;
