import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'


function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
