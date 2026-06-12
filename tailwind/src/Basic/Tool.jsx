import React from 'react'

const Tool = () => {
const [ number, setNumber] = React.useState(0)

function increaseNumber() {
  setNumber(number + 1)
}
function decreaseNumber() {
  setNumber(number - 1)
}
function resetNumber() {
  setNumber(0)
}
return (
  <div className="h-screen flex flex-col items-center justify-center gap-5" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1678986991216-9d674fa166d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww)` }}>
  <h1 className="text-xl font-bold text-center p-10 text-rose-700 border border-rose-500 bg-rose-50 w-full max-w-md rounded-lg">
    {number === 0 ? "Counter App" : "Counter Value"}
  </h1>

    <h2 className="text-xl font-bold text-center p-4 text-rose-700 border border-rose-500 w-50 rounded-lg flex-justify-center items-center bg-blue-200">
    {number}
  </h2>
  <button onClick={increaseNumber} className="text-xl font-bold text-center p-4 text-rose-700 border border-green-500 w-50 rounded-lg flex-justify-center items-center bg-green-200">
    Increase
  </button>
  <button onClick={decreaseNumber} className="text-xl font-bold text-center p-4 text-rose-700 border border-red-500 w-50 rounded-lg flex-justify-center items-center bg-red-200">
    Decrease
  </button>

  <button onClick={resetNumber} className="text-xl font-bold text-center p-4 text-rose-700 border border-blue-500 w-50 rounded-lg flex-justify-center items-center bg-blue-200">
    Reset
  </button>
</div>
  )
}

export default Tool