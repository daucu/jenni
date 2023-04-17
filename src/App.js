import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import About from './components/About';
import Blog from './components/Blog';
import Blog_single from './components/Blog_single';
import Log from './components/Log';
import Reg from './components/Reg';
import Tools from './components/Tools';
import Influencer_program from './components/Influencer_program';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog-single" element={<Blog_single/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/register" element={<Reg/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/influencer-program" element={<Influencer_program/>}/>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
