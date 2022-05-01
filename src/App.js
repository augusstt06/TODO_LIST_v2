import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Modal from "./Modal";
import {isOpen} from "./modules/modalState";
import axios from "axios";



function App() {
    // 현재 Modal Open State를 객체에 담는다.
    const currentState = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    function clickOpen(){
        dispatch(isOpen());
    }

    // api request
    let now      = new Date();
    const todoId = `${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`

    // const onKeyEnter = (e) => {
    //     if(e.key === 'Enter'){
    //         postData();
    //     }
    // }

    const [todoData,setTodoData] = useState({
        content   : '',
        completed : false,
        id        : todoId
      }
    );

    const [todoList, setTodoList] = useState([])

    async function getTodo(){
        try{
            const res = await axios.get(process.env.REACT_APP_TEST_API);
            setTodoList(res.data);
        } catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        getTodo().then(r => r);
    }, []);

    return (
        <div>
            <button onClick={clickOpen}>열어</button>
            <Modal isOpen = {currentState}/>
            <div>
                <ul>
                    {todoList.map(data => (
                        <div key={data.id}>
                            <li>
                                <a onClick={clickOpen}>내용 : {data.content}</a>
                                <br/>
                                <a>완료여부 : { data.completed ? '완료' : '미완료' }</a>
                                <br/><br/>
                            </li>
                            <button>삭제</button>
                            <Modal isOpen = {currentState}

                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
  );
}

export default App;
