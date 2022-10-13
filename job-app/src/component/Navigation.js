import React from 'react';
import image7 from'../imgs/image7.png';
import avat from '../imgs/avat.png';
import './Navigation.css';

const Navigation = () => { 
  return(

    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container m-0 p-0">
    <a className="navbar-brand" href="#"><img className='job' src={image7}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link" href="#"> <img className='avat mb-1' src={avat}/> Connection</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
export default Navigation;