import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
    <Footer />

  </Router>
);

export default App;
