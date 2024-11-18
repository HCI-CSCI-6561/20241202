import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomeBlock from './components/HomeBlock';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ReviewPage from './components/ReviewPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/navbar" 
          element={<NavBar />} /> // Protect the Dashboard route
        <Route 
          path="/login" 
          element={<Login />} /> // Protect the Dashboard route
        <Route 
          path="/HomeBlock" 
          element={<HomeBlock />} /> // Protect the Dashboard route
        <Route 
          path="/review/:id" 
          element={<ReviewPage />} /> // Protect the Dashboard route
      </Routes>
    </Router>
  );
}

export default App;
