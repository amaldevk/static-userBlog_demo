import logo from './logo.svg';
import './App.css';
import NavBlog from './components/NavBlog';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<NavBlog/>} />
          <Route path='/add' element = {<AddBlog/>} />
          <Route path='/view' element = {<ViewBlog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
