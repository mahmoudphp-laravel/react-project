import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbart bg-info text-white ">
              <NavLink className="nav-link " to="home">Home </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto  text-decoration-none">
                      <li className="nav-item active">
                          <NavLink className="nav-link " to="eat">Eat </NavLink>
                      </li>
                      <hr/>
                      <li className="nav-item" >
                          <NavLink className="nav-link" to="movie">Movie</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="tv">Tv</NavLink>
                      </li>
                      
                      
                  </ul>
                  
              </div>
          </nav>
    </>
  )
}
