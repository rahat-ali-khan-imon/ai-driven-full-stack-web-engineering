import { Suspense } from 'react'
import './App.css'
import Users from './M07.01Users.tsx'

const usersDataPromise = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

function App() {
  return (
    <>
      <h1>Suspense and API Data Load</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>
    </>
  )
}

export default App
