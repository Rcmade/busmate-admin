// userSlice.ts
import { UserInterface } from "@/Interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserInterface["user"];
  token: string | null | undefined;
  error: string | null | undefined;
}

const initialState: UserState = {
  user: {
    name: "",
    email: null,
    role: null,
    idCard: null,
    busNumber: "",
    weight: 0,
    isAuthenticated: false,
    token: null,
    tasks: [],
  },
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.user = initialState.user;
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
