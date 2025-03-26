import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MotoHomePage from './pages/MotoHomePage';
import MotoIndividualPage from './pages/MotoIndividualPage';
import Layout from './Layout/Layout';
import PresentationPage from './pages/PresentationPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<PresentationPage />} />
          <Route path='/motohomepage' element={<MotoHomePage/>}/>
          <Route path='/motoindividualpage/:id' element={<MotoIndividualPage/>}/>
          <Route path='/presentationpage' element={<PresentationPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
