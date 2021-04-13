import React, {Component} from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`


export default class App extends Component {
    constructor(props) {

        super(props);
        this.state = {
            data : [
                {label: 'Челика ебнуло градом, пиздец', important: false, id: 1},
                {label:'Выпил водки ебать уууу', important:false, id: 2},
                {label: 'Ну сука, ну банедри', important:true, id: 3}
            ]
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4; //отсюда идет генерация новых айди

    }


        // deleteItem = (id) => {
        //     this.setState(({data})=>({
        //         data:data.filter(item=> item)
        //     }))
        // }
        //ClassFields without constrotor

    deleteItem(id){
        this.setState(({data})=> {
            const index = data.findIndex(elem=>elem.id === id)
            // data.splice(index, 1);
            // return{
            //     data:data
            // }
            // Неправильно, смена стейта напрямую, нарушение имутабельности. Менять стейт нельзя. Нужно создать новый массив без удаленного элемента
            const before = data.slice(0, index);
            const after = data.slice(index+1) //со следующего эелмента от индекса

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
            //стейт мы не меняли, а заменили новым значением
        });
    }

    addItem(body) {
        const newItem ={
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock>
                 <AppHeader/>
                 <div className ="search-panel d-flex">
                     <SearchPanel/>
                     <PostStatusFilter/>
                 </div>
                 <PostList posts={this.state.data}
                 onDelete={this.deleteItem} />
                 <PostAddForm
                 onAdd={this.addItem}/>
            </AppBlock>
         )
    }


}

