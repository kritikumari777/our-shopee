import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const LOCAL_KEY = "myshop_cart_v1";

function loadState() {
    try {
        const s = localStorage.getItem(LOCAL_KEY);
        if (!s) return undefined;
        return JSON.parse(s);
    } catch (e) {
        console.error("Error loading state:", e);
        return undefined;
    }
}

function saveState(state) {
    try {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
    } catch (e) {
        console.error("Error saving state:", e);
    }
}

export const makeStore = () => {
    const preloaded = typeof window !== "undefined" ? loadState() : undefined;

    const store = configureStore({
        reducer: {
            cart: cartReducer,
        },
        preloadedState: preloaded ? { cart: preloaded } : undefined,
    });

    if (typeof window !== "undefined") {
        store.subscribe(() => {
            const state = store.getState();
            saveState(state.cart);
        });
    }

    return store;
};
