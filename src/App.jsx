import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MotoHomePage from './pages/MotoHomePage';
import MotoIndividualPage from './pages/MotoIndividualPage';
import Layout from './Layout/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Layout />} />
          <Route path='/motohomepage' element={<MotoHomePage/>}/>
          <Route path='/motoindividualpage/:id' element={<MotoIndividualPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
