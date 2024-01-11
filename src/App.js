import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import List from './components/List';
import Post from './components/Post';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} >
          <Route index element={<List />} />
          <Route path='list' element={<List />} />
          <Route path=':blogId' element={<BlogDetail />} />
          <Route path='post' element={<Post />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
