### TODO LIST_v2
### 1️⃣ 개요
- 사용 기술 스택
  - React
  - Redux
  - Json-server
---------------------------------
### 2️⃣ Todo List v1에서 구현해 놓은 것
  1. Json-server를 활용한 HTTP Request
     1. [TODO_LIST_v1/src/Main.jsx](https://github.com/augusstt06/TODO_LIST_v1/blob/master/src/Main.jsx)
        1. GET Request
        2. POST Request
        3. DELETE Request
     2. [TODO_LIST_v1/src/Detail.jsx](https://github.com/augusstt06/TODO_LIST_v1/blob/master/src/Detail.jsx)
        1. PUT Request
---------------------------------

### 3️⃣ Todo List v1을 바탕으로 수정 및 보완할 점
  1. ___불필요한 요청 최소화___  
     1. TODO_LIST_v1에서는 2개의 컴포넌트 (Main, Detail)가 사용되어 App.jsx에서 각각의 컴포넌트를 라우팅하는 코드가 작성되어 있다.
     2. 사용자가 Todo List의 상세내용을 조회할때마다 다른 컴포넌트로 렌더링 되는것이 비효율적/불편하다고 판단된다.
     >따라서 ___Modal___ 을 이용하여 불필요한 코드 작성을 줄이고, 사용자 입장에서도 효율적인 UI를 구성한다.  
  
  2. ___Redux를 활용한 상태관리 중앙화___
     1. 각각의 TodoList에 대한 Modal이 생성될텐데, Modal 스스로 열고 닫을수 있는 상태를 만들어야 한다.
     2. i 상태를 부모 컴포넌트에서 관리하게 되면 매번 Modal에게 props로 상태를 전달해야 하므로 코드가 무거워진다.
     > Redux를 사용한 상태의 중앙관리로 Modal이 직접 상태를 변경할수 있게 만들어 준다.  
  
  3. ___CSS 적용___
     1. 사용자 입장에서 한 눈에 들어오고, 직관적인 UI구성을 위해 CSS를 적용한다  

[//]: # (Redux Middle Ware 사용, Rerendering시기 명확히)
[//]: # (컴포넌트별로 api 요청을 하게되면 코드가 길고 무거워짐 => redux를 통한 모듈화)
### 4️⃣ Todo List v3 제작시 반영점
1. API요청시 비동기 / 넌블로킹 처리
   1. 현재 api요청을 하는 컴포넌트는 동기 / 블로킹 코드로 작성이 되어 있다.
   > api요청을 하고 response를 받아오기 전까지 다른 작업을 수행할수 있도록 비동기 / 넌블로킹 코드로 수정한다 
2. Redux MiddleWare 사용
   1. api요청과 같은 비동기 처리 작업을 수행하기 위해 MiddleWare 사용
   2. Redux-Saga 와 Redux-Thunk 중 1개 사용할 예정
3. Modal 수정
   1. List의 정보를 Modal로 구현하여 1개의 Modal에서 여러개의 데이터를 보여주기위해 Mapping했다.
   2. 위의 과정에서 Modal을 사용하지 않는 코드보다 훨씬 복잡하고 무거워져서 Modal의 사용방향을 새로 잡는다
      1. 목록을 삭제시 한 번 더 물어보는 화면만 Modal을 사용하고 기본 List에 대한 정보는 Main 컴포넌트에서 사용.
      2. 수정시, Main 컴포넌트에서 자체적으로 수정할수 있도록 조건부 렌더링을 시킨다.
4. CSS 라이브러리 사용
   1. 사용자 입장에서 조금 더 직관적이고 예쁜 페이지를 위해 CSS 라이브러리 사용 (부트스트랩 등)
    