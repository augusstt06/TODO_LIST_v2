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

    