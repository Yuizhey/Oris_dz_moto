import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MotoHomePage from './pages/MotoHomePage';
import MotoIndividualPage from './pages/MotoIndividualPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/motohomepage" />} />
        <Route path='/motohomepage' element={<MotoHomePage/>}/>
        <Route path='/motoindividualpage/:id' element={<MotoIndividualPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
