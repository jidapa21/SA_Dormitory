import React from 'react'
import  Sidebar  from "./components/Sidebar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Repairing  from "./pages/Repairing"

function App()  {
  return (
    <BrowserRouter>
      <Sidebar>
          <Routes>
            <Route path='/Report' element={<Repairing  />} />
          </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App