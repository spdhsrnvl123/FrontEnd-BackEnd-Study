import React from 'react';

//react-icons 의 MaterialDesign의 MdAdd 라는 아이콘 사용
import {MdAdd} from 'react-icons/md';

import "./ToDoInsert.scss";

const ToDoInsert = ({onInsert})=>{
    return(
        <form className = "ToDoInsert">
            <input placeholder ="할 일을 입력하세요" />
            <button type="submit"><MdAdd /></button>
        </form>
    )
}

export default ToDoInsert;