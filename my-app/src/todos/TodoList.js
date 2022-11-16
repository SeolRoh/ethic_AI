import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useState, useEffect } from "react";

const TodoList = ({todos,onDel,onToggle}) => {
    const [imgList, setImgList] = React.useState([]);

    /*
    const UrlList = (e) =>{
        fetch(`http://163.180.117.22:8881/api/list`,{
            method: 'GET'
        })
        .then(data => {
            console.log(data.json());
        })
    }*/

    useEffect(() => {
        fetch(`http://163.180.117.22:8881/api/list`,{
            method: 'GET'
        })
        .then(response => {
           return response.json();
        })
        .then(res => {
            setImgList(res.data);
        })
        .catch(error => {
            console.log(error);
          })
    },[setImgList]);

    const onimgList = () => {
        console.log("test");
        console.log(imgList);
    }

    return (
        // <ul className='TodoList'>
        //     {
        //         todos.map(todos=><TodoItem key={todos.id}
        //         todos={todos} onDel={onDel} onToggle={onToggle}/>)
        //     }
        // </ul>
        <ul className='TodoList'>
            {imgList.map((todoImg) =><img src={todoImg.url} />)}
            <button onClick={onimgList}>클릭</button>
        </ul>
    );
};

export default TodoList;