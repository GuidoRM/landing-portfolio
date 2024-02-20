import Image from 'next/image';
import React from 'react';
import Programador from '@/public/programador.png';
import Badge from '@/public/badge.png';

const Hero = () => {
  return (
    <section className='container-fluid hero'>

      <div className='row'>

        <section className='col-lg-6'>
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
            YEARS EXPERIENCES
          </p>

          <p className='hero__subtitle d-md-none'>I design beautifully simple things, And I love what i do</p>


        </section>

        <section className='col-lg-6 hero__badge d-none d-md-block'>

          <p>I design beautifully simple things, And I love what i do</p>

          <section>
            <Image src={Badge} alt='Badged Full Stack Developer' />
            <h3>FullStack JavaScript Developer</h3>
          </section>

        </section>

        <section className='hero__images container-fluid text-center'>
          <Image src={Programador} alt='Imagen personal' className='hero__images-photo'/>
          <Image src={Badge} alt='Badged Full Stack Developer' className='d-md-none hero__images-badge' />
        </section>

      </div>

    </section>
  )
}

export default Hero;