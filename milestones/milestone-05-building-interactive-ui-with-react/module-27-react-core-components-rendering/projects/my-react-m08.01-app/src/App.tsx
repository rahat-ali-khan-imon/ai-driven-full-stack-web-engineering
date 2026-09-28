// import Book from './components/Book'

import './App.css'
// import Users from './components/Users'
// import Users1 from './components/User1'

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

      {/* { books.map((book) => (
        // <Book name='book'/>

        <Book name={book}/>           // Dynamic string
      ))} */}

      <br /> <br /> <br />

      {/* <Users /> */}

      <br /> <br /> <br />

      {/* <Users1 /> */}
    </>
  )
}

export default App
