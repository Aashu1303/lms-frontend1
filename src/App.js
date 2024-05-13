<<<<<<< Updated upstream
import LoginPage from './pages/Login';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DashboardStudents from './pages/DashboardStudents';

=======
import LoginPage from "./pages/Login";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import DashboardStudents from './pages/DashboardStudents';
import DashboardStudents from "./pages/components/Dashboardstud/Index";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
}
=======
};
>>>>>>> Stashed changes

export default App;
