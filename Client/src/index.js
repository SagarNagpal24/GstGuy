import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Navbar from './components/navbar'

import './style.css'
import GstForm from './views/GstForm'
import Home from './views/home'
import SecondGstForm from './views/SecondGstForm'
import Faqs from './views/Faqs'
import Pricing from './views/Pricing'
import Pricing2 from './views/Pricing'
import GSTTool from './views/GSTTool'
import Gstchoice from './views/Gstchoice'
import GstToolServices from './views/GstToolServices'

const App = () => {
  return (<>
  
    <Router>
    <Navbar></Navbar>
      <div>
        <Routes>
        <Route element={<Home/>}  path="/" />
        
        <Route element={<GstForm/>}  path="/gstform" />
        <Route element={<SecondGstForm></SecondGstForm>}  path="/secondgstform" />
        <Route element={<Faqs/>}  path="/faqs" />
        <Route element={<Pricing2/>}  path="/pricing" />
        <Route element={<GSTTool/>}  path="/gsttool" />
        <Route element={<GstToolServices/>}  path="/gsttool1" />
        <Route element={<Gstchoice/>}  path="/gstchoice" />
        
        </Routes>
       
        
        
        
      </div>
    </Router>
  </>
   
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
