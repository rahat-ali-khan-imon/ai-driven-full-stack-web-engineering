
import './App.css'

function App() {

  function handleClick() {
    alert('Button Clicked')
  }

  const handleClick1 = () => {
    alert('Click Me 3')
  }

  const handleAddToCart = (id: number) => {
    // alert('Buying items', id)
    alert('Buying items ' + id)
  }

  return (
    <>
      {/* Normal JavaScript */}
      {/* <button onclicek="handleClick()">Normal JavaScript 1</button> */}

      <button onClick={handleClick}>Click Me 2</button>

      {/* <button onClick={handleClick()}>Direct Call</button> */}

      <br />

      <button onClick={handleClick1}>Click Me 3</button>

      <br />

      <button onClick={() => alert('Click 4')}>
        Click Me 4
      </button>

      <br />

      {/* <button onClick={handleAddToCart}>Buy This 1</button> */}

      <br />

      {/* <button onClick={handleAddToCart(65)}>Buy This 2</button> */}
      <button onClick={() => handleAddToCart(63)}>Buy This 3</button>

      <br />

      <button onClick={() => handleAddToCart(101)}>
        Add to Cart
      </button>
    </>
  )
}

export default App
