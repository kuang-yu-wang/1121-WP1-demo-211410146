import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogStaticPage_46 from './pages/BlogStaticPage_46';
import BlogNodeServer_46 from './pages/BlogNodeServer_46';
import BlogLocalJson_46 from './pages/BlogLocalJson_46';

const App_46 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/static_46' element={<BlogStaticPage_46 />} />
        <Route path='/node_46' element={<BlogNodeServer_46 />} />
        <Route path="/local_46" element={<BlogLocalJson_46 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_46;
