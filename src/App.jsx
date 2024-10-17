
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  function handleClick2(){
    alert('button2 clicked')
  }
  function addToFour(num){
    alert(num + 4)
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
      <button onClick={()=>addToFour(5)}>Four</button>
    </>
  )
}

export default App
