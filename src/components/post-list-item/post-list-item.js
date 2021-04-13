import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
   
    state = {
        important: false,
        like:false
    }
    
   onImportant = () => {
         this.setState((state)=>({
            important:!state.important
        }))
    }

    onLike = () => {
        this.setState((state)=>({
           like:!state.like
       }))
   }

    render() {
        const {label, onDelete} = this.props;
        const {important, like} = this.state; //меняемое состояние звездочки
        let classNames = 'app-list-item d-flex justify-content-between'
        if(important) {
            classNames += ' important';
        }

        if(like){
            classNames += ' like';
        }

        return (
            <div className = {classNames}>
            <span className = "app-list-item-label"
            onClick={this.onLike}>
                   {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button"
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}
