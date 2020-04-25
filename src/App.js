import React from 'react';
import {Component} from 'react';
import {Modal} from './components/modal';
import './App.css';
import {NoteContainer} from "./components/note-container";

class app extends Component {
    constructor() {
        super();
        this.state = {
            a: ["hello", "mohit", "bhi=aya"],
            isActive: false,
            duplicate: null,
            activeNote :'',
            existing :  false
        }
    };

    closeModal = () => {
        this.setState({isActive: false,  activeNote : ''});
    };

    saveNote = text => {
        let memos = [...this.state.a];
        if (this.state.existing) {
            let index = memos.indexOf(this.state.duplicate);
            memos.splice(index, 1);
        }

        this.setState({
            a:[...memos, text],
            isActive: false,
            activeNote : '',
            duplicate: null
        })
    };

    deleteNote = text => {
        let index = this.state.a.indexOf(text);
        let newMemos = [...this.state.a];
        newMemos.splice(index, 1);

        this.setState({a: newMemos});
    };

    setExisting = () => {
        this.setState({existing: true});
    };

    resetExisting = () => {
        this.setState({existing: false});
    };

    updateStatus = (text = this.state.activeNote) => {
        if(!this.state.duplicate) {
            this.setState({
                activeNote:text,
                isActive :true,
                duplicate: text
            });
        }
        else {
            this.setState({
                activeNote:text,
                isActive :true
            });
        }

    };

    editNote = (text) => {

    };

    render() {
        return (
            <div className="App">
                <button onClick={() => {this.resetExisting(); this.updateStatus();}} className='btn add-btn'>ADD MEMO <i className="fas fa-plus-circle"/>
                </button>
                {this.state.isActive ? <Modal close={this.closeModal} saveNote={this.saveNote} pretext={this.state.activeNote} updateStatus={(text)=> this.updateStatus(text)}/> : null}
                <NoteContainer a={this.state.a} setExisting={this.setExisting} updateStatus={(text, existing)=> this.updateStatus(text, existing)} deleteNote={text => this.deleteNote(text)}/>
            </div>
        );
    }
}


export default app;
