import Link from 'next/link';
import React from 'react';

const Footer = () => {

  const TITLE = "</Guido Dev>";

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
    <footer className='footer container-fluid'>

      <section className="footer__section row">

        <div className='col-12 col-md-8 footer__subsectionLeft'>
          <h3>Let’s Make Something Amazing Together</h3>
          <h3>Start by <strong>saying hi</strong></h3>
        </div>

        <div className='col-12 col-md-4 footer__subsectionRight'>
          <div>
            <h3>Information</h3>
            <p>Cancún, Quintana Roo. Mex.</p>
          </div>

          <ul>
            {
              BUTTONS.map((button, index) => (
                <li key={`navbarButton-${index}`} className='navbar__buttons-option'>
                  <Link href={button.href}>
                    {button.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

      </section>

      <hr />

      <section className='footer__reminders'>
        <h3 className='d-none d-md-block'>{TITLE}</h3>
        <p>Powered By <strong>DevKoore</strong> con 💝</p>
      </section>
    </footer>
  );
}

export default Footer;
