import React, {Component} from 'react';

import './post-add-form.css';


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
        this.onValueChange=this.onValueChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onValueChange(event) {
        this.setState({
            text: event.target.value
        })
        //колбек можно не передавать потому что не важна синхронность, стрелочная не нужна
    }
    onSubmit(e){
        e.preventDefault(); //отмена стандратного события
        this.props.onAdd(this.state.text);
        this.setState({
            text:''
        });
    }
    
    render() {
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чем думаешь ветеран?"
                    className="form-control new-post-label color"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-castom">
                    Добавить
                </button>
            </form>
        )
    }
}
