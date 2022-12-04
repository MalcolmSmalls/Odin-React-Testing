// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Our First Test</h1>
//     </div>
//   );
// }

// export default App;



import React from "react"

export default function App () {
  const [ title, setTitle ] = React.useState('Magnificent Monkeys')

  function handleClick () {
    setTitle('Radical Rhinos')
  }

  return (

    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Change title</button>
    </div>

  )
}