import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";

const getUserFromLocalStorage = (): User | null => {
  try {
    const user = localStorage.getItem("comfy-store-user");
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  } catch (error) {
    console.error("Error loading user from local storage: ", error);
    return null;
  }
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      try {
        localStorage.setItem(
          "comfy-store-user",
          JSON.stringify(action.payload),
        );
      } catch (error) {
        console.error("Error saving user from local storage: ", error);
      }
      if (action.payload.username === "demo user") {
        toast({ description: "Welcome Guest User" });
        return;
      }
      toast({ description: "Login successful" });
    },

    logoutUser: (state) => {
      state.user = null;
      try {
        localStorage.removeItem("comfy-store-user");
      } catch (error) {
        console.error("Error removing user from local storage: ", error);
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
