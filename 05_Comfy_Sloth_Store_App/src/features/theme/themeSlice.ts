import themeApplier from "@/utilities/themeApplier";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeInitialize = (): Theme => {
  const theme = (localStorage.getItem("vite-ui-theme") as Theme) || "system";
  themeApplier(theme);
  return theme;
};

const initialState: ThemeState = {
  theme: themeInitialize(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      themeApplier(action.payload);
      localStorage.setItem("vite-ui-theme", action.payload);
    },

    // New reducer to handle local system theme change
    setSystemTheme: (state) => {
      // Determine the actual system theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      // Set the state to "system" to reflect user choice
      state.theme = "system";

      // Apply the detected system theme
      themeApplier(systemTheme);

      // Store "system" in local storage
      localStorage.setItem("vite-ui-theme", "system");
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
