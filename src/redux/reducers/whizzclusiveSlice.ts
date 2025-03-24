import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WhizzclusiveCardState {
  imagePath: string;
}

const initialState: WhizzclusiveCardState = {
  imagePath: "/images/whizzclusive.png", // Default image path, can be replaced
};

const whizzclusiveSlice = createSlice({
  name: 'whizzclusive',
  initialState,
  reducers: {
    setImagePath(state, action: PayloadAction<string>) {
      state.imagePath = action.payload;
    },
  },
});

export const { setImagePath } = whizzclusiveSlice.actions;
export default whizzclusiveSlice.reducer;
