// Explore JSX and How to use CSS in a component

import './App.css'

function App() {

  return (
    <>
      <h1>My React</h1>
      
      <Student1></Student1>
      <Student1></Student1>
      <Student1></Student1>

      <br /> <br /> <br />

      <Student2></Student2>
      <Student2></Student2>
      <Student2></Student2>

      <br /> <br /> <br />

      <Student3></Student3>
      <Student3></Student3>
      <Student3></Student3>

      <br /> <br /> <br />

      <Student4></Student4>
      <Student4></Student4>
      <Student4></Student4>

      <br /> <br /> <br />
    </>
  )
}


{/* Student1: Basic JSX without CSS */}
function Student1() {
  return (
    <div>
      <h3>Name: </h3>
      <p>Grades: </p>
    </div>
  )
}

{/* Student2: Styling a component using an external CSS file */}
function Student2() {
  return (
    <div className='student2'>          {/* App.css and CSS file */}
      <h3>Name: </h3>
      <p>Grades: </p>
    </div>
  )
}

{/* Student3: Styling using a JavaScript style object */}
function Student3() {

  const studentStyle = {              //    {/* JavaScript file */}
    border: '3px solid red',
    margin: '20px',
    borderRadius: '10px'
  }
  
  return (
    <div style={studentStyle}>
      <h3>Name: </h3>
      <p>Grades: </p>
    </div>
  )
}

{/* Student4: Inline styling directly inside JSX */}
function Student4() {
  return (
    <div style={{
      border: '3px solid lightgreen',
      margin: '20px',
      borderRadius: '10px'
    }}>
      <h3>Name: </h3>
      <p>Grades: </p>
    </div>
  )
}

export default App



{/*
###> code-এ মূলত ৪টা CSS approach দেখানো হয়েছে:

  Student1 → কোনো CSS নেই / normal JSX
  Student2 → External CSS file (App.css) + className
  Student3 → JavaScript object-এ style রেখে style attribute
  Student4 → JSX-এর ভিতরে সরাসরি inline style  
*/}