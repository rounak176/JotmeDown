import React from 'react'
import './note.css'

export const Note = (props) => (

    <div className='col-md-4'>
        <div className='card-container'>
            <p onClick={() => {
                props.setExisting();
                props.updateStatus(props.text, true);
            }}>{props.text}
            </p>
            <button onClick={() => {
                props.deleteNote(props.text);
            }} className='del-btn btn'>DELETE
            </button>
        </div>
    </div>
);

