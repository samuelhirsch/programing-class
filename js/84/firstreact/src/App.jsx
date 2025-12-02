import './App.css'
import Address from "./address"
const myH2='My first project in react'
function App() {
  return (
    <>
      <h1>Welcome to react</h1>
      <h2>{myH2}</h2>
      <Address street='15 allegheny cross'city='monroe'state='NY'zip='10950'/>
    </>
  )
}
export default App
