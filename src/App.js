import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard' ;

function App() {
  return (
    <div className="App">
      <nav className='navtext'>
      Patients can upload X-rays and check for various diseases which will be evaluated by various machine learning models on the backend.
      </nav>
      <header className="App-header">
        <Router>
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/Dashboard" element={<Dashboard />} />
         </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
