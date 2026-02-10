import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Maps from './pages/Maps';
import Insights from './pages/Insights';

// Placeholder pages for links that don't exist yet
const PlaceholderPage = ({ title }) => (
  <div className="p-12 max-w-4xl mx-auto text-center">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-gray-600">Content coming soon.</p>
  </div>
);

// Layout Wrapper
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
          <Route path="/map" element={<Maps />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/state-resources" element={<PlaceholderPage title="State Resources" />} />
          <Route path="/about" element={<PlaceholderPage title="About & Methodology" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;