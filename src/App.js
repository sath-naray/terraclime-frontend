import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import Reports from './pages/Reports';
function App() {
  return (
    <div className="App dm-sans">
       <BrowserRouter>
          <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/forgot-password' element={<ForgotPassword />}/>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile' element={<Profile />}/>
                <Route path="/reports" element={<Reports />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}
export default App;
