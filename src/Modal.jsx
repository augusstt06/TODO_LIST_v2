import React, {Fragment, useState, useEffect} from "react";
import ReactModal from 'react-modal';
import {useDispatch} from "react-redux";
import {isClose, isClickClose} from "./modules/modalState";
import axios from "axios";
import {isPut} from "./modules/todoState";

function Modal({ isOpen, data }){
    const dispatch = useDispatch();
    function clickClose(){
        dispatch(isClose());
        dispatch(isClickClose())
    }
    const [modify, setModify]     = useState(false);

    const [todoData, setTodoData] = useState({
        content : data.content,
        completed : data.completed,
        id : data.id
    });

    const changeModify = () => {
        setModify(!modify);
    }

    const typingTodo = (e) => {
        const { value, name } = e.target;
        setTodoData({
            [name]    : value,
            completed : data.completed,
            id        : data.id
        })
    }
    const changeCompleted = () => {
        axios.put(`${process.env.REACT_APP_TEST_API}/${data.id}`,{
            content   : data.content,
            completed : !data.completed,
            id        : data.id
        })
            .then(r => {
                console.log(r);
                dispatch(isPut(r.data));
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    // api request (PUT/DELETE)
    const putTodo = () => {
        axios.put(`${process.env.REACT_APP_TEST_API}/${data.id}`,{
            content   : todoData.content,
            completed : data.completed,
            id        : data.id
        })
            .then(r => {
                console.log(r.data);
                dispatch(isPut(r.data));
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    return (
        <ReactModal isOpen = { isOpen }
                    ariaHideApp={false}>
            {!modify ?
            <Fragment>
                <div>
                    <h3>{data.content}</h3>
                    <a>완료 여부</a>
                    <a>{data.completed ? '👍' : '👎'}</a>
                    <br/>
                    <button onClick = { changeModify }>수정</button>
                    <button onClick = { clickClose }>닫기</button>
                </div>
            </Fragment>
            :
            <Fragment>
                <textarea defaultValue = { data.content }
                          onChange     = { typingTodo }
                          placeholder  = { '할 일을 입력하세요' }
                          name         = { 'content' }/>
                <button onClick = { changeCompleted }>{data.completed ? '완료' : '완료 취소' }</button>
                <button onClick = { putTodo }>수정완료</button>
                <button onClick = { changeModify }>취소</button>
                <button onClick = { clickClose }>닫기</button>
            </Fragment>}
        </ReactModal>
    )
};
export default Modal;