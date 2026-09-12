
import './App.css'

function App() {

  return (
    <>
    <h1>My React</h1>

      <Student 
        name ="Subidha Badhi" 
        gpa="3.87"
      />

      <Student name="Pati Leader" gpa='4.00'></Student>
      
      <Student
        name='Normal'
        gpa='3.56'
      />

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
  console.log(props.name)

  return (
    <div className='student'>
      <h3>Name: {props.name}</h3>
      <p>Grades: {props.gpa}</p>
    </div>
  )
}

export default App
