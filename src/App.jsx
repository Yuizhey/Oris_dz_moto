import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MotoHomePage from './pages/MotoHomePage';
import MotoIndividualPage from './pages/MotoIndividualPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/motohomepage" />} />
        <Route path='/motohomepage' element={<MotoHomePage/>}/>
        <Route path='/motoindividualpage/:id' element={<MotoIndividualPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
