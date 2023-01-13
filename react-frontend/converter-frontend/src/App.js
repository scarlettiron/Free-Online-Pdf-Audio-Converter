import './App.css';
import './css/general.css'
import './css/converter_style.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact component={Home} path='/'></Route>
      </Router>
    </div>
  );
}

export default App;
