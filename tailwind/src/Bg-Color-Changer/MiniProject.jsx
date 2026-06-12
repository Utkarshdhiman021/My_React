import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("white");
  
      return (
          <div className="h-screen flex flex-col items-center justify-center gap-5 transition-all duration-500"
        style={{ backgroundColor: bgColor }}>
              <h1 className='text-4xl font-bold text-center'>Background Color Changer</h1>
              <div className='flex gap-4 justify-center mt-5'>
                  <button
                      onClick={() => setBgColor("red")}
                      className='bg-red-500 text-white px-4 py-2 rounded-lg'>Red</button>
                  <button
                      onClick={() => setBgColor("blue")}
                      className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Blue</button>
                  <button
                      onClick={() => setBgColor("green")}
                      className='bg-green-500 text-white px-4 py-2 rounded-lg'>Green</button>
                  <button
                      onClick={() => setBgColor("yellow")}
                      className='bg-yellow-400 text-black px-4 py-2 rounded-lg'>Yellow</button>
              </div>
          </div>
      )
  }
  
export default App;