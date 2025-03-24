import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice";
import filterReducer from "./reducers/filterSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer, 
    filter: filterReducer,

  },
});

export default store;
