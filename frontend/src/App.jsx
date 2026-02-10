// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Maps from './pages/Maps';
import Insights from './pages/Insights';
import About from './pages/About';
import PolicyBasics from './pages/PolicyBasics';
import Media from './pages/Media';
import StateResources from './pages/StateResources';
import Research from './pages/Research';
import HowToHelp from './pages/HowToHelp'; // <--- New Import

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/policy-basics" element={<PolicyBasics />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/media" element={<Media />} />
          <Route path="/state-resources" element={<StateResources />} />
          <Route path="/research" element={<Research />} />
          <Route path="/how-to-help" element={<HowToHelp />} /> {/* <--- New Route */}
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;