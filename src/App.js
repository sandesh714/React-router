import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Orange from './pages/Orange';
import Red from './pages/Red';
import Green from './pages/Green';
import Purple from './pages/Purple';

function App() {
  return (
    <div>
      <h1>Welcome to color router app</h1>
      <nav className="navbar navbar-default navbar-static-top">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <Link className="nav-link" to="orange">
              Orange
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="red">
              Red
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="green">
              Green
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="purple">
              Purple
            </Link>
          </li>
        </ul>
      </nav>

      <div className="routes-wrapper">
        <Routes>
          <Route path="/orange" element={<Orange />} />
          <Route path="/red" element={<Red />} />
          <Route path="/purple" element={<Purple />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;