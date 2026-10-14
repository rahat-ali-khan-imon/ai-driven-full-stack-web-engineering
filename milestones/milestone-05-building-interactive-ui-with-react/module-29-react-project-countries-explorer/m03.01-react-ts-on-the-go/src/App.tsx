import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './components/countries';

const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch('https://openapi.programming-hero.com/api/all');
  const data = response.json();
  return data;
}

function App() {
  return (
    <>
      <h2>World on the Go...</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App



// Display country information in UI and apply CSS