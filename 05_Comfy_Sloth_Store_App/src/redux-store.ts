import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/features/user/userSlice";
import cartReducer from "./redux/features/cart/cartSlice";
import themeReducer from "./redux/features/theme/themeSlice";

const store = configureStore({
  reducer: {
    userState: userReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TypeRootState = ReturnType<typeof store.getState>;

// Inferred type: {friends: friendsSate, posts: PostsState, comments: CommentsState, users: UsersState}
export type TypeAppDispatch = typeof store.dispatch;

export type TypeReduxStore = {
  getState: () => TypeRootState;
  dispatch: TypeAppDispatch;
};

export default store;
