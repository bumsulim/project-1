import './App.css';
import Header from './component/header';
import Main from './component/main';
import Introduce from './component/introduce';
import Post from './component/post';
import Footer from './component/footer';
import MorePost from './component/morePost';
import WritePost from './component/writePost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/introduce' element={<Introduce />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/post/more' element={<MorePost />}></Route>
          <Route path='/post/write' element={<WritePost />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
