import React from 'react'
import Image1 from '../imgs/image1.png';
import Image8 from '../imgs/image8.png';
import Rectangle50 from '../imgs/Rectangle50.png';
import Rectangle51 from '../imgs/Rectangle51.png';
import Rectangle55 from '../imgs/Rectangle55.png';
import Rectangle56 from '../imgs/Rectangle56.png';
import Rectangle57 from '../imgs/Rectangle57.png';
import Rectangle60 from '../imgs/Rectangle60.png';
import Rectangle63 from '../imgs/Rectangle63.png';
import Rectangle66 from '../imgs/Rectangle66.png';
import Google from '../imgs/Google.png';
import Image11 from '../imgs/image11.png';
import Vector3 from '../imgs/Vector3.png';
import Vector4 from '../imgs/Vector4.png';
import Image2 from '../imgs/image2.png';
import Image3 from '../imgs/image3.png';
import Group62 from '../imgs/Group62.png';

function Card() {
    return (
        <div className='container'>
            <br />
            <h5 className='paragraphe'>Evénement carrière à ne pas manquer</h5>
            <br />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row'>
                            <div className='col-6 md-6 sm-12 xs-12 bg-white ps-4'>
                                <p className=' text-muted'> DU JEUDI 22 SEPTEMBRE 2022 A 10:00 AU SAMEDI 22 OCTOBRE <br /> A 18:00</p>
                                <p>Google warsow- women in tech mentoring program<br /><br />
                                    En ligne <br /><br /> <img className='google' src={Google} /> Google</p>
                                <br></br>
                                <p className='text-muted'> <img className='clos' src={Group62} /> Inscription Closes</p>
                            </div>
                            <div className='col-6  md-6 sm-12 xs-12'>
                                <img className='image2 d-block w-100' src={Image1} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row'>
                            <div className='col-6 md-6 sm-12 xs-12 bg-white ps-4'>
                                <p className=' text-muted'> DU JEUDI 22 SEPTEMBRE 2022 A 10:00 AU SAMEDI 22 OCTOBRE <br /> A 18:00</p>
                                <p>Google warsow- women in tech mentoring program<br /><br />
                                    En ligne <br /><br /> <img  className='google' src={Google} /> Google</p>
                                <br></br>
                                <p className='text-muted'> <img className='clos' src={Group62} /> Inscription Closes</p>
                            </div>
                            <div className='col-6  md-6 sm-12 xs-12 '>
                                <img className='image2 d-block w-100' src={Image2} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row'>
                            <div className='col-6 md-6 sm-12 xs-12 bg-white ps-4'>
                                <p className='para text-muted'> DU JEUDI 22 SEPTEMBRE 2022 A 10:00 AU SAMEDI 22 OCTOBRE <br /> A 18:00</p>
                                <p className='para' >Google warsow- women in tech mentoring program</p>
                                   <p  className='para'> En ligne </p> 
                                    <p  className='para'><img  className='google' src={Google}/> Google</p>
                                <br></br>
                                <p className='para text-muted'> <img className='clos' src={Group62} /> Inscription Closes</p>
                            </div>
                            <div className='col-6  md-6 sm-12 xs-12 '>
                                <img className='image2 d-block w-100' src={Image3} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <h5 className='paragraphe'>Accompagnement carrière</h5>
            <br />
            <div className="row">
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card1" src={Image8} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted"> LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">Dealing witch sollers <br /> En ligne</p>
                            <p> <img src={Image11} /> Sollers consulting</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"> <img src={Vector3} />  56 etudiants sont intéressées</small>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card2" src={Rectangle50} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">Dealing witch sollers</p>
                            <p> <img src={Image11} /> Sollers consulting</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"> <img src={Vector4} />  En cour términe dans 8 jours</small>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card3" src={Rectangle51} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">Dealing witch sollers</p>
                            <p> <img src={Image11} /> Sollers consulting</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"> <img src={Vector4} />  En cour términe dans 7 jours</small>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <p className='even'>Voir les Evenements</p>
               <br />
            <h5 className='paragraphe'>Rencontre professionnelle et recrutemment</h5>
               <br />
            <div className='row'>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src={Rectangle55} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                                <p className="card-text">Dealing witch sollers <br /> En ligne</p>
                                <p> <img src={Image11} /> Sollers consulting</p>
                                <p className="card-text"><small class="text-muted"><img src={Vector3} />  56 etudiants sont intéressées</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card-img-top" src={Rectangle56} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">Dealing witch sollers <br /> En ligne</p>
                            <p><img src={Image11} /> Sollers consulting</p>
                            <p className="card-text"><small class="text-muted">56 etudiants sont intéressées </small></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card-img-top" src={Rectangle57} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">Dealing witch sollers <br /> En ligne</p>
                            <p><img src={Image11} /> Sollers consulting</p>
                            <p className="card-text"><small class="text-muted"> <img src={Vector4} /> En cour términe dans 7 jours</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='row'>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src={Rectangle60} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                                <p className="card-text">En ligne</p>
                                <p><img src={Image11} /> Sollers consulting</p>
                                <p className="card-text"><small class="text-muted"><img src={Vector3} />  56 etudiants sont intéressées</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card-img-top" src={Rectangle63} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">En ligne</p>
                            <p><img src={Image11} /> Sollers consulting</p>
                            <p className="card-text"><small class="text-muted"><img src={Vector3} />  56 etudiants sont intéressées</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 md-4 sm-12 xs-12'>
                    <div className="card">
                        <img className="card-img-top" src={Rectangle66} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title text-muted">LE JEUDI 03 OCTOBRE DE  10:00 A 10:45</h6>
                            <p className="card-text">En ligne</p>
                            <p><img src={Image11} /> Sollers consulting</p>
                            <p className="card-text"><small class="text-muted"><img src={Vector3} />  56 etudiants sont intéressées</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <p className='even'>Voir les 7 Evenements</p>
        </div>
    )
}
export default Card