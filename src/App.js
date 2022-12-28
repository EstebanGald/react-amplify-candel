import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Registro from './login/Registro';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavLink exact activeClassName="active" to="/">Registro</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Registro />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
