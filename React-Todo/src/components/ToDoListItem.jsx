import React from 'react';

import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import cn from 'classnames';
import "./ToDoListItem.scss";

const ToDoListItem = ({todo})=>{
    //넘어온 데이터 중에서 text 와 checked만 분해
    const {text,checked} = todo
    return(
        <div className = "ToDoListItem">
            <div className = {cn("checkbox",{checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
            </div>
            <div className = "remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default ToDoListItem;