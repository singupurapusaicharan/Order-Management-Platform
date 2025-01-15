import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { NewOrder } from './pages/NewOrder';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-order" element={<NewOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;