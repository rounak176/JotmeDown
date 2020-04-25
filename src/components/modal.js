import React from 'react'
import './modal.css'

let memo='';
export const Modal = (props) => {
    memo=props.pretext;
    return (
        <div>
            <div className='overlay'/>
            <div className="memo-input-container">
            <textarea className="memo-input" onChange={(e)=> {props.updateStatus(e.target.value)}} value={props.pretext}/>
                <button onClick={()=> {props.saveNote(memo)}}>Save <i className="fas fa-save"/></button>
                <button onClick= {props.close}>Cancel <i className="far fa-window-close"/></button>
            </div>
        </div>
    );
};
