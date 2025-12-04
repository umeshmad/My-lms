import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Course from "./pages/Course";
import Register from './pages/Register';
import Login from "./pages/Login";
import Tuter from "./pages/Tuter";
import Admin from "./pages/Admin";
import Navbar from "./pages/Navbar";
import CourseForm from './pages/CourseForm';
import Student from './pages/Student'
function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/student/:studentId" element={<Student/>}/>
          <Route path="/courseform" element={<CourseForm/>}/>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutor" element={<Tuter />} />
          <Route path="/course" element={<Course />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
