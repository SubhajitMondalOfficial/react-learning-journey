import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom, Slide } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

export const CollectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!alreadyExist) {
        state.items.unshift(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: () => {
      toast.success("Saved to Collection!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("Remove from Collection!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addedToast, removeToast } =
  CollectionSlice.actions;

export default CollectionSlice.reducer;
