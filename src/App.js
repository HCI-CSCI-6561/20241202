import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BookDetail from './components/BookDetail';
import Bookshelf from './components/Bookshelf';
import HomeBlock from './components/HomeBlock';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ReviewPage from './components/ReviewPage';
import Reviews from './components/Reviews';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/navbar"
          element={<NavBar />} /> {/* 显示导航栏页面 */}
        <Route
          path="/login"
          element={<Login />} /> {/* 显示登录页面 */}
        <Route
          path="/homeblock"
          element={<HomeBlock />} /> {/* 显示主页块页面 */}
        <Route
          path="/review/:id"
          element={<ReviewPage />} /> {/* 显示具体书籍的评论页面 */}

        {/* 新增书籍详情页面 */}
        <Route
          path="/book"
          element={
            <div className="bg-[#b08c7d] min-h-screen p-6">
              <BookDetail />
              <Reviews />
            </div>
          }
        /> {/* 显示书籍详情和评论页面 */}
        <Route
          path="/Bookshelf"
          element={<Bookshelf />} /> {/* 显示具体书籍的评论页面 */}
      </Routes>
    </Router>
  );
}

export default App;
