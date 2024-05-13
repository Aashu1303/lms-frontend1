import LoginPage from './pages/Login';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DashboardStudents from './pages/DashboardStudents';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<DashboardStudents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
