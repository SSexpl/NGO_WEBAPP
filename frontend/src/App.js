import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Event from './components/Event';
import Home from './components/Home';
import { Register } from './components/Register';
import { Profile } from './components/Profile';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
            <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>contact</h1>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/event" element={<Event/>} />
      </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
