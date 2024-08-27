import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Kompetisi from './Kompetisi/Kompetisi'
import SignUp from './Home/components/SignUp';
import Write from './crud/Write';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/kompetisi" element={<Kompetisi />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/write" element={<Write />} />
      </Routes>
  
  </div>
  )
}

export default App
