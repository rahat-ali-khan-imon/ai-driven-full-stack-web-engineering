import Book from './components/Book'

import './App.css'
import Users from './components/Users'

function App() {
  const books = ['Physics', 'Math', 'Chemistry', 'Biology', 'English', 'History']

  return (
    <>
      <h1>Get started</h1>

      {
        books.map((book) => (
          <li>{book}</li>
        ))
      }

      <br /> <br /> <br />

      { books.map((book) => (
        // <Book name='book'/>

        <Book name={book}/>           // Dynamic string
      ))}

      <br /> <br /> <br />

      <Users />

      
    </>
  )
}

export default App
