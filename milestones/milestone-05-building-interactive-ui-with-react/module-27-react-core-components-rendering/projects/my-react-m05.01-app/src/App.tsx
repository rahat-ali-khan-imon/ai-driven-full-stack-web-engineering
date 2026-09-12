
import './App.css'

function App() {

  return (
    <>
      <h1>My React</h1>
      <button>Login</button> <br />
      <button disabled>Sign Up</button>
      <img src="" width={100} height="200" alt="" />

      <br /> <br /> <br />

      <Student name ="Subidha Badhi" gpa="3.89" />
      {/* <Student></Student>
      <Student></Student> */}

      <br /> <br /> <br />
    </>
  )
}


type StudentProps = {
  name: string,
  gpa: string
}

function Student(props: StudentProps) {
  console.log('Inside the student component', props);
  return (
    <div className='student'>
      <h3>Name: </h3>
      <p>Grades: </p>
    </div>
  )
}

export default App
