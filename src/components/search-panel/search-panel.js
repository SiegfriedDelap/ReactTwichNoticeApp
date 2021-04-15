import React, {Component} from 'react';

import './search-panel.css';


export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e){
        const searchTerm = e.target.value;
        this.setState({searchTerm}); //стейт не зависит от предыдущего  значения
        this.props.onUpdateSearch(searchTerm);
    }

    render(){
        return (
            <input
                className="form-control search-input search"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch} //для слежки ввода юзера

                />
        )
    }
    
}
