import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Modal from "./Modal";
import {isOpen} from "./modules/modalState";
import {isPost, isGet} from "./modules/todoState";
import axios from "axios";

import styles from "./style/App.module.css";



function App() {
    // 현재 store에 저장된 todolist의 상태를 useSelector를 이용해 객체에 담아 조회한다.
    // useDispatch를 사용해 action을 생성한다.
    const dispatch = useDispatch();

    const modalState = useSelector(state => state.modalReducer);
    const todoState  = useSelector(state => state.todoReducer);

    function clickOpen(){
        dispatch(isOpen());
    }

    // api request
    let now      = new Date();
    const todoId = `${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`

    const onKeyEnter = (e) => {
        if(e.key === 'Enter'){
            postTodo();
        }
    }

    const [todoData,setTodoData] = useState({
        content   : '',
        completed : false,
        id        : todoId
      }
    );

    const typingTodo = (e) => {
        const {value, name} = e.target;

        setTodoData({
            ...todoData,
            [name] : value
        });
    }
    const getTodo = () => {
        axios.get(process.env.REACT_APP_TEST_API)
            .then(r => {
                dispatch(isGet(r.data));
            })
            .catch(err => console.log(err));
    }
    console.log(todoState,'포스팅 전')
    const postTodo = () => {
        axios.post(process.env.REACT_APP_TEST_API,{
            content   : todoData.content,
            completed : false,
            id        : todoId
        })
            .then(r => {
                dispatch(isPost(r.data));
                alert('작성이 완료되었습니다');
            })
            .catch(err =>  console.log(err))
    }
    // const putTodo = () => {
    //     axios.put(process.env.REACT_APP_TEST_API, {
    //         content  : todoData.content,
    //         completed : currentComplteState,
    //         id       : todoId
    //     })
    //         .then(r => {
    //             console.log(r);
    //             alert('수정이 완료되었습니다.');
    //             window.location.reload();
    //         })
    //         .catch(err => console.log(err));

    // }
    useEffect(() => {
        getTodo();
    }, [])

    console.log()

    return (
        <div className={ styles.Main }>
            <header>List</header>

            <div>
                <input placeholder = { '할 일을 입력하세요' }
                       onKeyPress  = { onKeyEnter }
                       onChange    = { typingTodo }
                       name        = {'content'}
                       />
                <button onClick={postTodo}>입력</button>
            </div>
            <div>
                <ul>
                    {todoState.map(data =>(
                        <div key = {data.id}>
                            <li>
                                <a onClick = { clickOpen }>내용 : {data.content}</a>
                                <br/>
                                <a>
                                    완료여부 : { data.completed ? '완료' : '미완료' }
                                </a>
                                <br/><br/>
                                <Modal isOpen  = { modalState }
                                       data = { data }/>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
  );
}

export default App;
