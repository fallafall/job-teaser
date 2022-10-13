// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Nav2 from './component/Nav2';
import Card from './component/Card';

function App() {
  return (
    <div className="App bg-light  m-0 p-0">
       <Navigation />
         < Nav2 />
           <br />
            <Card />
            <Footer />
    </div>
  );
}

export default App;
