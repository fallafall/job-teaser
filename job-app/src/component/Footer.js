import React from 'react'
import image5 from '../imgs/image5.png';
import youtub from '../imgs/youtub.png';
import Facebook from '../imgs/Facebook.png';
import FRA from '../imgs/FRA.png';
import angla from '../imgs/angla.png';
import insta from'../imgs/insta.png';

function Footer() {
    return (
        <div className='footer bg-dark text-light'>
            <div className='row'>
                <div className='col-lg-6 md-6 sm-12 xs-12'> 
                    <img className='image5' src={image5} />
                </div>
                <div className=' col-lg-6 md-6 sm-12 xs-12'>
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-light mt-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={FRA} /> Français
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"> <img  className='angla' src={angla} /> England</a></li>
                            </ul>
                        </div>
                    </div>
                    <img className='reseaux' src={youtub} />
                    <img className='insta' src={insta} />
                    <img className='face' src={Facebook} />
                </div>
            </div>
            <hr />
            <div className='row text-center'>
                <div className='col-lg-3 md-3 sm-12 xs-12 '>
                    <p>S'incrire<br />Chercher une offre<br /> Découvrir les entreprises<br /> Evénements recrutemment
                        <br />Conseils recrutemment</p>
                </div>
                <div className='col-lg-3 md-3 sm-12 xs-12'>
                    <p>Ecoles et Universités<br /> <br />Notre Offre Career Center <br />Nos etablissement partenaires<br /></p>
                </div>
                <div className='col-lg-3 md-3 sm-12 xs-12'>
                    <p>entreprises<br /><br /> <br /> Notre offre entreprise</p>
                </div>
                <div className='col-lg-3 md-3 sm-12 xs-12'>
                    <p>jobteaser<br />Nous rejoindre <br /> A propos <br /> Rencontrer notre équipe</p>
                </div>
            </div>
            <hr />
            <div className='row text-center'>
                <div className='col-lg-1 md-1 sm-12 xs-12'>
                    <p>Statuts </p>
                </div>
                <div className='col-lg-2 md-2 sm-12 xs-12'>
                    <p> mentions  légales</p>
                </div>
                <div className='col-lg-1 md-1 sm-12 xs-12'>
                    <p>Cookie</p>
                </div>
                <div className='col-lg-3 md-3 sm-12 xs-12'>
                    <p> politique de confidentialité </p>
                </div>
                <div className='col-lg-1 md-1 sm-12 xs-12'>
                    <p> securité</p>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <p>Copyright &copy; jobteaser 2008-2022</p>
                </div>
            </div>
        </div>
    )
}
export default Footer