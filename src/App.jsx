import './App.css'
import Footer from './components/Footer/Footer'
import MotoCard from './components/MotoCard/MotoCard'
import MotoCardsGrid from './components/MotoCardsGrid/MotoCardsGrid'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <>
      <Navbar />
      <SearchBar />
      <MotoCardsGrid/>
      <Footer />
    </>
  )
}

export default App
