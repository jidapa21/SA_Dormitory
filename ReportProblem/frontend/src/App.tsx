import React from 'react'
import  Sidebar  from "./components/Sidebar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Repairing  from "./pages/Repairing"
import ResigningForm  from "./pages/ResigningForm"
import En_ExitingForm  from "./pages/En_ExitingForm"
import DelayedPaymentForm  from "./pages/DelayedPaymentForm"
import Status  from "./pages/Status"
import "./App.css"

function App()  {
  return (
    <BrowserRouter>
      <Sidebar>
          <Routes>
            <Route path='/Repairing' element={<Repairing  />} />
            <Route path='/ResigningForm' element={<ResigningForm  />} />
            <Route path='/En_ExitingForm' element={<En_ExitingForm  />} />
            <Route path='/DelayedPaymentForm' element={<DelayedPaymentForm  />} />
            <Route path='/Status' element={<Status  />} />
          </Routes>
      </Sidebar>
    </BrowserRouter>
    
  )
}

export default App