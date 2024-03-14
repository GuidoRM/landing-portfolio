import Link from 'next/link';
import React from 'react';
import WhatsappSVG from './Home/WhatsappSVG';

const Nav = () => {

  const TITLE = "</Joni Dev>";

  const BUTTONS = [
    {
      name: "SERVICES",
      href: ""
    },
    {
      name: "PROJECTS",
      href: ""
    },
    {
      name: "NOTES",
      href: ""
    },
    {
      name: "EXPERIENCES",
      href: ""
    }
  ];

  return (

    <nav className="navbar fixed-top">

      <div className="container-fluid navbarWrapper">

        <a className="navbar-brand navbar__title" href="#">{TITLE}</a>

        <ul className='navbar__buttons d-none d-xl-flex'>
          {
            BUTTONS.map((button, index) => (
              <li key={`navbarButton-${index}`} className='navbar__buttons-option'>
                <Link href={button.href}>
                  {button.name}
                </Link>
              </li>
            ))
          }

          <li className='navbar__buttons-whatsapp'>
            +54 2964-476955
            <WhatsappSVG />
          </li>
        </ul>



        <button className="navbar-toggler d-xl-none navbar__menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="34" viewBox="0 0 50 34" fill="none">
            <path d="M6 2H44" stroke="black" stroke-width="3" />
            <path d="M0 17H50" stroke="black" stroke-width="3" />
            <path d="M6 32H44" stroke="black" stroke-width="3" />
          </svg>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <h5 className="offcanvas-title navbar__title" id="offcanvasNavbarLabel">{TITLE}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {
                BUTTONS.map((button, index) => (
                  <li className='nav-item' key={`nav-item-${index}`} >
                    <Link href={button.href} className='nav-link'>
                      {button.name}
                    </Link>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;