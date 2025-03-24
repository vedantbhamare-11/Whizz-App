import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice";
import filterReducer from "./reducers/filterSlice";
import whizzclusiveReducer from './reducers/whizzclusiveSlice';
const store = configureStore({
  reducer: {
    category: categoryReducer, 
    filter: filterReducer,
    whizzclusive: whizzclusiveReducer,
  },
});

export default store;
