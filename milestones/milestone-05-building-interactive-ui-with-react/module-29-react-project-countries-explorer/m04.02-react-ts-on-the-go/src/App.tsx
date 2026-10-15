import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './Components/Countries/Countries';

const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await response.json();
  return data;
}

function App() {
  return (
    <>
      <h1>World on the Go...</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
