import {BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Course from "./pages/Course";
import Register from './pages/Register';
import Login from "./pages/Login";
import Tuter from "./pages/Tuter";
import Admin from "./pages/Admin"
function App() {
 
  return (
    <>
      <Admin/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/course" element={<Course/>}/>
        </Routes>
      </Router>
   
   </>
  )
}

export default App
