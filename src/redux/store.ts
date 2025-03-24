import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice";
import filterReducer from "./reducers/filterSlice";
import whizzclusiveReducer from './reducers/whizzclusiveSlice';
import restaurantReducer from "./reducers/restaurantSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer, 
    filter: filterReducer,
    whizzclusive: whizzclusiveReducer,
    restaurant: restaurantReducer,
  },
});

export default store;
