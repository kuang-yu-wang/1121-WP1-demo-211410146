/* eslint-disable react/jsx-pascal-case */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogStaticPage_46 from './pages/BlogStaticPage_46';
import BlogNodeServer_46 from './pages/BlogNodeServer_46';
import HomePage_46 from './pages/HomePage_46';
import BlogSupabase_46 from './pages/BlogSupabase_46';

const App_46 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_46 />} />
        <Route path='/static_46' element={<BlogStaticPage_46 />} />
        <Route path='/node_46' element={<BlogNodeServer_46 />} />
        <Route path='/supa_46' element={<BlogSupabase_46 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_46;
