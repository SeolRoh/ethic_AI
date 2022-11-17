import React, { useRef, useState } from 'react';
import './TodoInput.css';
import { MdAddCircle } from "react-icons/md";
// import dog from 'my-app\public\assets';

const TodoInput = ({onAdd}) => {

    const textRef = useRef()
    const [text,setText] = useState('')
    const [file,setFile] = useState('')

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
    
    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);

        let form = new FormData();
        form.append('file', e.target.files[0]);
        
        fetch(`http://163.180.117.38:33333/api/upload`,{
            method: 'POST',
            body : form
          })
        .then(data => {
          console.log(data);
        })

    }

    return (
        <form className='TodoInput' onSubmit={onSubmit}>
            {/* <input type='text' value={text} 
            onChange={changeInput} ref={textRef}/> */}
            <div>
            <label for="raised-button-file">
                <MdAddCircle className='icon' size='50' >
                </MdAddCircle>
            </label>
            <input accept="image/*"
                   id="raised-button-file"
                   type="file"
                   file={file.file}
                   onChange={handleFileChange}
                   style={{display: "none" }}
            />
            </div>
            
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXO7VZexAEx7Vu8uax_1-v3nZ65zwhkfr5A&usqp=CAU"/> */}
        </form>
    );
};

export default TodoInput;