import { configureStore } from "@reduxjs/toolkit";

import { useAppSelector } from "./hook";

//feature redux stores
// import loginFeature from "src/features/login/redux";

const store = configureStore({
  reducer: {
    
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;