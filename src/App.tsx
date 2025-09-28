import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>NEW FLY</h1>
        <div className="search_card">
          <form action="" method="get">
            <div className="from"><h3>From:</h3>
              <input type="text" name="" placeholder='FROM' id="" />
            </div>
            <div className="to">
              <h3>To:</h3>
              <input type="text" name="" placeholder='TO' id="" />
            </div>
            <div className="people">
              <h3>People:</h3>
              <input type="number" name="" className='pn' id="" />
            </div>
           <div className="travel">
            <h3>Depature:</h3>

              <input type="date" name="" className='indate' id="" />
            </div>

            
          </form>
          <div className="to">
            <h3>
            Round Trip:
            </h3>
            <input type="checkbox" name="" id="checkround" />
          </div>
          
        </div>
        <div className="card_results">

        </div>
        <input type="button" value="Search" />
      </div>
    </>
  )
}

export default App
