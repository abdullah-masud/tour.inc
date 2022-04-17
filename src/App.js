import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
