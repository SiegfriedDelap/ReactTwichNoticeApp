import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.sass';

//Во избежание ошибки ключей создаем рандонмые айди


const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item;
        return(
            <li key={item.id} className="list-group-item">
                <PostListItem 
                // label ={item.label}
                // important={item.important}
                {...itemProps}
                onDelete={()=> onDelete(id)}
                onToggleImportant={()=>onToggleImportant(id)}
                onToggleLike={()=>onToggleLike(id)}
                />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;