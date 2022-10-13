import React from 'react'
import Vector from '../imgs/Vector.png';
import Delete from '../imgs/Delete.png';

function Nav2() {
  return (
    <>
      <div className='nav2 '>
        <div className='row bg-white text-center pt-2'>
          <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12  border border-top-0 border-left-0'>
            <input className='input' type='text' placeholder='Que recherchez-vous?' />
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 border border-top-0 border-right-0'>
            <div class="btn-group" role="group">
              <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                TYPES D'EVENEMENT
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> England</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-1 col-md-1 col-sm-12 col-xs-12  border border-top-0 border-left-0'>
            <div class="btn-group" role="group">
              <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                DATES
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> England</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-1 col-md-1 col-sm-12 col-xs-12  border border-top-0 border-left-0'>
            <div class="btn-group" role="group">
              <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                LIEU
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> England</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 md-3 sm-12 xs-12  border border-top-0 border-left-0'>
            <div class="btn-group" role="group">
              <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                SECTEUR D'ACTIVITE
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> England</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-2 md-2 sm-12 xs-12  border border-top-0 border-left-0'>
            <div class="btn-group" role="group">
              <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                FONCTION
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> England</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='nav3 bg-white'>
        <div className='row'>
          <div className='col-lg-12 '>
            <img className='delete' src={Delete} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Nav2