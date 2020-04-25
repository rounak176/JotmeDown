import React from 'react'
import {Note} from "./note"
import './note-container.css'

export const NoteContainer  = (props) => {
    return(
        <div className='container'>
            <div className='row'>
                { props.a.map((text) =>(<Note text={text} deleteNote={props.deleteNote} setExisting={props.setExisting} updateStatus={props.updateStatus}/>)) }
            </div>
        </div>
    )
};