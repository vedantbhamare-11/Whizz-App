import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice"; // Import the category reducer

const store = configureStore({
  reducer: {
    category: categoryReducer, // Add the category reducer here
  },
});

export default store;
