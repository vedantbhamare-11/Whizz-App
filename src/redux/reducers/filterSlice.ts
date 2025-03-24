import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  activeButton: string;
  filterButtons: { label: string; value: string }[];
  filterOptions: { label: string; value: string }[];
  isDropdownOpen: boolean;
}

const initialState: FilterState = {
  activeButton: "",
  filterButtons: [
    { label: "Under Rs 200", value: "underRs200" },
    { label: "Great Offers", value: "greatOffers" },
    { label: "Quick", value: "quick" },
    { label: "Rating 4.0+", value: "rating4" },
    { label: "Gourmet", value: "gourmet" },
  ],
  filterOptions: [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non-vegetarian" },
    { label: "Vegan", value: "vegan" },
    { label: "Spicy", value: "spicy" },
    { label: "Low Calorie", value: "low-calorie" },
  ],
  isDropdownOpen: false, // Initially, the dropdown is closed
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveButton(state, action: PayloadAction<string>) {
      state.activeButton = action.payload;
    },
    toggleOption(state, action: PayloadAction<string>) {
      // Add logic for selecting/deselecting options (checkboxes)
    },
    toggleDropdown(state) {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const { setActiveButton, toggleOption, toggleDropdown } = filterSlice.actions;
export default filterSlice.reducer;
