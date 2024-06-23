import { createNewNote, changeNoteText, selectNote, deleteNote } from "../state/notes/notesSlice"
import { AppDispatch, RootState } from "../state/store"
import { useDispatch, useSelector } from "react-redux"

const Notes = () => {

    const NoteComponent = ({id, text, selected}: {id: number, text: string, selected: boolean}) => {
        return(
            <div className={selected ? "list-item-container selected" : "list-item-container"} id={id.toString()}>
                <button onClick={() => dispatch(selectNote(id))} className="list-item">{text ? text.slice(0, 8) : "New note"}</button>
                <button onClick={() => dispatch(deleteNote(id))} className="x-button">X</button>
            </div>
        )
    }

    const state = useSelector((state: RootState) => state.notes)
    const dispatch = useDispatch<AppDispatch>()

    console.log(state)

    return(
        <div className="notes-container">
            <div className="notes-list">
                <button onClick={() => dispatch(createNewNote())} className="create-new-list">+</button>
                {state.map((item) => <NoteComponent selected={item.selected} key={item.id} id={item.id} text={item.text} />)}
            </div>
            {state.map((item) => item.selected && 
                <form className="selected-note" action="" key={item.id}>
                    <h4 className="selected-note-title">Your selected note:</h4>
                    <textarea value={item.text} onChange={(event) => dispatch(changeNoteText({id: item.id, text: event?.target.value}))} className="selected-note-text" name="" id=""></textarea>
                </form>
            )}
        </div>
    )
}

export default Notes