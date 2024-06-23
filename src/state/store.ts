import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import notesReducer from "./notes/notesSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        notes: notesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch