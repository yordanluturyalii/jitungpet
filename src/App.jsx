import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Book } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
