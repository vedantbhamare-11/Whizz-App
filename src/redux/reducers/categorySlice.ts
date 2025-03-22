import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state of categories
interface CategoryState {
  categories: { name: string; image: string }[];
  activeCategory: string;
}

const initialState: CategoryState = {
  categories: [
    { name: "All", image: "/images/biryani.png" },
    { name: "Meals", image: "/images/biryani.png" },
    { name: "Rice", image: "/images/biryani.png" },
    { name: "Starters", image: "/images/biryani.png" },
    { name: "Curries", image: "/images/biryani.png" },
    { name: "Desserts", image: "/images/biryani.png" },
  ],
  activeCategory: "All", // Default active category
};

// Create the category slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

// Export actions
export const { setActiveCategory } = categorySlice.actions;

// Export reducer
export default categorySlice.reducer;
