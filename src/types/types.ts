// types.ts 

// Interfaces for Restaurant card
export interface Dish {
  name: string;
  price: string;
  image: string;
}

export interface Restaurant {
  name: string;
  dishes: Dish[];
  rating: number;
  deliveryTime: string;
  distance: string;
}

export interface RestaurantState {
  restaurants: Restaurant[];
}

//Interface for category section
export interface Category {
  name: string;
  image: string;
}

export interface CategoryState {
  categories: { name: string; image: string }[];
  activeCategory: string;
}

//Interface for Search bar
export interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder: string;
}

//Interface for Toggle
export interface ToggleProps {
  isVegOnly: boolean;
  onToggle: () => void;
}

//Interface for Filter buttoon section
export interface FilterState {
  activeButton: string;
  filterButtons: { label: string; value: string }[];
  filterOptions: { label: string; value: string }[];
  isDropdownOpen: boolean;
}

//Interface for Whizzclisive card section
export interface WhizzclusiveCardState {
  imagePath: string;
}

//Interface for Horizontal line
export interface HorizontalLineProps {
  color?: string; // Customizable color (Tailwind CSS color class)
  thickness?: string; // Customizable thickness (Tailwind CSS thickness class)
  className?: string; // Additional customization (e.g., margins or other styles)
}