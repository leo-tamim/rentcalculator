import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  count: number;
}

/**
 * Default state object with initial values.
 */
const initialState: CommonState = {
  count: 0,
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    incrementCount: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.count>
    ) => {
      state.count += action.payload;
    },
    decrementCount: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.count>
    ) => {
      state.count -= action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getCommonState = (state: { common: CommonState }) => state.common;

// Exports all actions
export const { incrementCount, decrementCount } = userSlice.actions;

export default userSlice.reducer;
