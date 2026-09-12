
import './App.css'

function App() {

  return (
    <>
      <Student 
        name="Subidha Badhi"
        gpa={3.93}
      />
      {/* <Student></Student>
      <Student></Student> */}

      <br /> <br /> <br />
    </>
  )
}



// আরও ভালো: Destructuring
// React + TypeScript-এ এভাবেও লিখতে পারো:

type StudentProps = {
  name: string,
  gpa: number
}

function Student({name, gpa}: StudentProps) {
  console.log('Inside the student component', {name, gpa})

  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Grades: </p>
    </div>
  )
}

export default App
