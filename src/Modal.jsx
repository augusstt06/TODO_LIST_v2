import React from "react";
import ReactModal from 'react-modal';
import {useDispatch} from "react-redux";
import {isClose, isClickClose} from "./modules/modalState";
import axios from "axios";

function Modal({ isOpen, data }){
    const dispatch = useDispatch();

    function clickClose(){
        dispatch(isClose());
        dispatch(isClickClose())
    }

    // api request (PUT/DELETE)
    return (
        <ReactModal isOpen = { isOpen }
                    ariaHideApp={false}>
            <h3>{data.content}</h3>
            <a>완료 여부</a>
            <a>{data.completed ? '👍' : '👎'}</a>
            <button onClick = { clickClose }>닫기</button>
        </ReactModal>
    )
};
export default Modal;