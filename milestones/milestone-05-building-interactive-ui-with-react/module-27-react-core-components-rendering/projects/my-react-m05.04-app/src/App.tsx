
import './App.css'

function App() {

  return (
    <>
      <h1>My React</h1>

      <Developer 
        language='JavaScript'
        experience='3 years'
      />

      <Developer 
        language='Python'
        experience='10 years'
      />

      <Developer 
        language='Java'
        experience='4 years'
      />
    </>
  )
}


type DeveloperProps = {
  language: string,
  experience: string
}

function Developer(props: DeveloperProps) {
  console.log(props);
  return (
    <div className="student">
      <h4>Programming Language: {props.language}</h4>
      <p>Years of Experience: {props.experience}</p>
    </div>
  )
}

export default App
