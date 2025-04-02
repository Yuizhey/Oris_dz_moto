import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MotoHomePage from './pages/MotoHomePage';
import MotoIndividualPage from './pages/MotoIndividualPage';
import PresentationPage from './pages/PresentationPage';
import AddNewVehiclePage from './pages/AddNewVehiclePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<PresentationPage />} />
          <Route path='/motohomepage' element={<MotoHomePage/>}/>
          <Route path='/motoindividualpage/:id' element={<MotoIndividualPage/>}/>
          <Route path='/presentationpage' element={<PresentationPage />}/>
          <Route path='/addnewvehicelpage' element={<AddNewVehiclePage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
