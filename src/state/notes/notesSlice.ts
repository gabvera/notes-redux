import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Note {
    id: number,
    text: string,
    selected: boolean
}

const initialState: Note[] = []

const counterSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        createNewNote: (state) => {
            const newID = Date.now()
            state.push({ id: newID, text: "", selected: true });
            state.forEach(item => {
                if (item.id !== newID) {
                    item.selected = false;
                }
            });
        },
        changeNoteText: (state, action: PayloadAction<{ id: number, text: string }>) => {
            const { id, text } = action.payload;
            state.forEach(item => {
                if (item.id === id) {
                    item.text = text
                }
            });
        },
        selectNote: (state, action: PayloadAction<number>) => {
            const selectedId = action.payload;
            state.forEach(item => {
              if(item.id === selectedId){
                item.selected = true
              }else{
                item.selected = false
              }
            });
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            const selectedId = action.payload;
            return state.filter(note => note.id !== selectedId)
        },
    },
})

export const {createNewNote, changeNoteText, selectNote, deleteNote} = counterSlice.actions

export default counterSlice.reducer