// import React, { useState, memo, useCallback } from "react"
// import { CreateTodo } from "./components/CreateTodo"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

// const [title,setTitle] = useState("my name is hadi")

// function Update(){
//   setTitle(Math.random())
// }
//   return (
//     <div>
//       <button onClick={
//        Update } >Click me to change it</button>
//       <Header prop={title}></Header>
//       <Header prop="hadi2"></Header>
//       <Header prop="hadi2"></Header>
//       <Header prop="hadi2"></Header>
//       <Header prop="hadi2"></Header> 
//       <Header prop="hadi2"></Header>
//       <Header prop="hadi2"></Header>
//       <Header prop="hadi2"></Header>
//       <Header prop="hadi2"></Header>
//     </div>
//   )
// }


// const Header = memo( ({ prop }) =>{
//   return <div>
//     {prop}
//   </div>
// })
// let counter = 4
// function App(){
// const [todos, setTodos] = useState([{
//   id:1 ,
//   title: "gym",
//   desc: "go to gym"
// }, {
//   id: 2,
//   title: "code",
//     desc: "code in react"
//   }, 
// {
//   id:3,
//   title: "walk",
//   desc: "walk 5kms "
// }])


// function CreateIt(){
//   setTodos([...todos, {
//     id: counter++,
//     title: "laugh",
//     desc: "hehe"
//   }])
// }


// return (<div>
//   <button onClick={CreateIt}> Add todo</button>
//   {todos.map( (todo) => 
//     <CreateTodo
//       title={todo.title}
//      desc={todo.desc}
//      key={todo.id} />
//   )}
//   </div>)
// }
// import { Card } from "./components/Card"
function App() {

  // function Text(){
  //   return <div>
  //     hi there
  //   </div>
  // }

  return <div>
    <Card>
      <div>
        hi there
      </div>
    </Card>
  </div>

}

function Card({ children}) {
  console.log(children)
  return <div style={{
    border: "2px black solid"
  }}>
    {children}
  </div>
}




export default App
