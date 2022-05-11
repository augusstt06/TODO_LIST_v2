import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Modal from "./Modal";
import {isOpen} from "./modules/modalState";
import {isAdd, isGet} from "./modules/todoState";
import axios from "axios";

import styles from "./style/App.module.css";



function App() {
    // 현재의 todo의 완료 여부, Modal open, close 상태를 객체에 담는다.
    // const currentComplteState = useSelector(state => state.completeReducer)
    // const currentModalState   = useSelector(state => state.modalReducer);
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

    // todoData를 굳이 app 컴포넌트에서 관리해야 하나?
    // 이 데이터는 하위 Modal에서 모두 사용해야 하는데 그럼 redux store에 담는게 더 효율적인것이 아닌가
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

    const postTodo = () => {
        axios.post(process.env.REACT_APP_TEST_API,{
            content   : todoData.content,
            completed : false,
            id        : todoId
        })
            .then(r => {
                console.log(r);
                alert('작성이 완료되었습니다');
                window.location.reload();
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
