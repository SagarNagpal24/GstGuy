import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Navbar from './components/navbar'

import './style.css'
import GstForm from './views/GstForm'
import Home from './views/home'

const App = () => {
  return (<>
  
    <Router>
    <Navbar></Navbar>
      <div>
        <Routes>
        <Route element={<Home/>}  path="/" />
        
        <Route element={<GstForm/>}  path="/gstform" />
        </Routes>
       
        
        
        
      </div>
    </Router>
  </>
   
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
