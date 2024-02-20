import Image from 'next/image';
import React from 'react';
import Programador from '@/public/programador.png';
import Badge from '@/public/badge.png';

const Hero = () => {
  return (
    <section className='container-fluid hero'>

      <div className='row hero__cols'>

        <section className='col-lg-6 row hero__cols-left'>

          <div>
            <h1 className='hero__title'>
              Hey There,<br />
              I&apos;m Jonatan
            </h1>

            <a
              href="mailto:guidorafaelmamani100@gmail.com"
              target="_blank" rel="noopener noreferrer"
              className='hero__email d-none d-md-block'
            >
              guidorafaelmamani100@gmail.com
            </a>

            <p className='hero__experiencies'>
              <strong>3 </strong>
              YEARS <br /> EXPERIENCES
            </p>

            <p className='hero__subtitle d-md-none'>I design beautifully simple things, And I love what i do</p>

          </div>

        </section>

        <section className='col-lg-6 hero__badge row hero__cols-right d-none d-md-flex'>

            <p>I design beautifully simple things, And I love what i do</p>

            <section className='hero__cols-right-badge'>
              <Image src={Badge} alt='Badged Full Stack Developer' />
              <h3>FULLSTACK <br /> JAVASCRIPT <br /> DEVELOPER</h3>
            </section>

        </section>

      </div>

      <section className='hero__images container-fluid'>
        <Image src={Programador} alt='Imagen personal' className='hero__images-photo' />
        <Image src={Badge} alt='Badged Full Stack Developer' className='d-md-none hero__images-badge' />
      </section>

    </section>
  )
}

export default Hero;