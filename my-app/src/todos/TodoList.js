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
        fetch(`http://163.180.117.38:33333/api/list`,{
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
        <ul className='TodoList'>
            {/* {imgList.map((todoImg) =><video src={todoImg.url} />)} */}
            {imgList.map((todoImg) =><embed type="video/webm" src={todoImg.url} width="250" height="200"/>)}
            {/* {<button onClick={onimgList}>클릭 </button> }
            
            {imgList.map((todoImg) => <button onClick= {todoImg.url}> {todoImg.id} </button> )} */}

        </ul>
    );
};

export default TodoList;