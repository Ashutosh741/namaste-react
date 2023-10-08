import React from 'react'
// import logo from '../images/logo.jpg';
const Header = () => {
  return (
    <section className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            {/* <img src = {logo} className='logo img-fluid'/> */}

            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
                </li>

            </ul>
            </div>
        </div>
        </nav>
    </section>
  )
}

export default Header
