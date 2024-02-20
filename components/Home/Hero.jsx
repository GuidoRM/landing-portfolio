import Image from 'next/image';
import React from 'react';
import Programador from '@/public/programador.png';
import Badge from '@/public/badge.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
      <section>
        <h1>
          Hey There,<br/>
          I&apos;m Jonatan
        </h1>

        <a 
          href="mailto:guidorafaelmamani100@gmail.com" 
          target="_blank" rel="noopener noreferrer">
          guidorafaelmamani100@gmail.com
        </a>

        <p>
          <strong>3</strong>
          YEARS EXPERIENCES
        </p>
      </section>
      <Image src={Programador} alt='Imagen personal' className=''/>

      <section>
        <p>I design beautifully simple things, And I love what i do</p>

        <section>
          <Image src={Badge} alt='Badged Full Stack Developer' className=''/>
          <h3>FullStack JavaScript Developer</h3>
        </section>
      </section>

    </section>
  )
}

export default Hero;