import React, { useRef, useState } from 'react';
import './TodoInput.css';
import { MdAddCircle } from "react-icons/md";


const TodoInput = ({onAdd}) => {

    const textRef = useRef()
    const [text,setText] = useState('')

    const changeInput = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault() //새로고침 방지

        if(!text) return //text에 아무것도 없을 때 - 공백 입력 방지

        onAdd(text)

        setText('')
        textRef.current.focus();
    }

    return (
        <form className='TodoInput' onSubmit={onSubmit}>
            {/* <input type='text' value={text} 
            onChange={changeInput} ref={textRef}/> */}
            <div>
                <button style={{margin:"0"}}>
                    <MdAddCircle className='icon' size='50'>
                    </MdAddCircle>
                </button>
            </div>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXO7VZexAEx7Vu8uax_1-v3nZ65zwhkfr5A&usqp=CAU" alt="image" />
        </form>
    );
};

export default TodoInput;