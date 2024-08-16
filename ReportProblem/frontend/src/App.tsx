import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Repairing from './pages/Repairing/index';
import En_ExitingForm from './pages/En_ExitingForm/index';
import DelayedPaymentForm from './pages/DelayedPaymentForm/index';
import ResigningForm from './pages/ResigningForm';
import Status from './pages/Status';
import Announcement from './pages/Announcement/index';
import PaymentConfirmation from './pages/PaymentConfirmation/index'; // เปลี่ยนชื่อเป็น PaymentConfirmation

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Announcement />} />
          <Route path='/Repairing' element={<Repairing />} />
          <Route path='/ResigningForm' element={<ResigningForm />} />
          <Route path='/En_ExitingForm' element={<En_ExitingForm />} />
          <Route path='/DelayedPaymentForm' element={<DelayedPaymentForm />} />
          <Route path='/Announcement' element={<Announcement />} />
          <Route path='/Status' element={<Status />} />
          <Route path='/PaymentConfirmation' element={<PaymentConfirmation />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App