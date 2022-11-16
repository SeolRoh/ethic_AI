import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({todos,onDel,onToggle}) => {
    const UrlList = (e) =>{
        fetch(`http://163.180.117.22:8881/api/list`,{
            method: 'GET'
        })
        .then(data => {
            console.log(data)
        })
    }
    return (
        // <ul className='TodoList'>
        //     {
        //         todos.map(todos=><TodoItem key={todos.id}
        //         todos={todos} onDel={onDel} onToggle={onToggle}/>)
        //     }
        // </ul>
        <ul className='TodoList'>
            {
                todos.map(todos=><UrlList key={todos.id}
                todos={todos} />)
            }
        </ul>
    );
};

export default TodoList;