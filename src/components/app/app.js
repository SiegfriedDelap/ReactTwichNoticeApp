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
                {label: 'Челика ебнуло градом, пиздец', important: false, like:false, id: 1},
                {label:'Выпил водки ебать уууу', important:false, like:false, id: 2},
                {label: 'Ну сука, ну банедри', important:true, like:false, id: 3}
            ]
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
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

    onToggleImportant(id){

        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id===id);//мы ищем в дате нужный айди который пришел к нам

            const old = data[index];

            const newItem = {...old, important: !old.important} //инвертируем лайк со старого объекта
            
            const before = data.slice(0, index);
            
            const after = data.slice(index+1) //со следующего эелмента от индекса

            const newArr = [...before, newItem, ...after];

            return{
                data:newArr
            }

        })
    }

    onToggleLike(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id===id);//мы ищем в дате нужный айди который пришел к нам

            const old = data[index];

            const newItem = {...old, like: !old.like} //инвертируем лайк со старого объекта
            
            const before = data.slice(0, index);
            
            const after = data.slice(index+1) //со следующего эелмента от индекса

            const newArr = [...before, newItem, ...after];

            return{
                data:newArr
            }

        })
    }

    render() {

        const {data} = this.state;
        const liked = data.filter(item => item.like).length //если лайк тру, то возвращаем, прохд по каждому элементу
        const allPosts = data.length //количество постов всего

        return (
            <AppBlock>
                 <AppHeader
                 liked={liked}
                 allPosts={allPosts}/>
                 <div className ="search-panel d-flex">
                     <SearchPanel/>
                     <PostStatusFilter/>
                 </div>
                 <PostList 
                 posts={this.state.data}
                 onDelete={this.deleteItem}
                 onToggleImportant={this.onToggleImportant}
                 onToggleLike={this.onToggleLike} />
                 <PostAddForm
                 onAdd={this.addItem}/>
            </AppBlock>
         )
    }


}

