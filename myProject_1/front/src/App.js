import './App.css';
import Header from './component/header';
import Main from './routes/main';
import Introduce from './routes/introduce';
import Post from './routes/post';
import Footer from './component/footer';
import MorePost from './routes/morePost';
import WritePost from './routes/writePost';
import ViewPost from './routes/viewPost';
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
          <Route path='/post/view/:postId' element={<ViewPost />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
