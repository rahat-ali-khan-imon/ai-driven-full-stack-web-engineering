import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './components/countries';

const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await response.json();
  return data.countries;
}

function App() {
  return (
    <>
      <h2>World on the Go...</h2>

      <Suspense fallback={<div>Loading...</div>}>
        {/* <Countries countriesPromise={countriesPromise}></Countries> */}
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
