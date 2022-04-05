import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
         <Header></Header>
         <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/review' element={<Dashboard></Dashboard>}></Route>
          <Route path='/review' element={<Blog></Blog>}></Route>
          <Route path='/review' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
    </div>
  );
}

export default App;
