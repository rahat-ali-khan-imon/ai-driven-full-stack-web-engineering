
import './App.css'

function App() {

  return (
    <>
      <h1>Get started</h1>
      <Person></Person>
      <Gadgets></Gadgets>
      <Fragment></Fragment>
    </>
  )
}


function Person() {
  return <p>I am here.</p>
  // <h2>He is there.</h2>                  // Error
}

function Gadgets() {
  return <div>
    <h1>Programming Hero</h1>
    <p>Programming is fun...........!</p>
  </div>
}

function Fragment() {
  const money = 57;           // Variable Declare

  return (
    <>
    <br /> <br />
    
      <p>Some</p>
      <p>Someone</p>
      <p>Something</p>

      <br />

      <p>Sum: {3 + 5}</p>     {/* Dynamic Content */}
      <p>Summation: {money}</p>
    </>
  )
}

export default App
