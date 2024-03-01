import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

const ProjectCard = ({ backgroundColor, title, description, image } ) => {
  return (
      <article className='projects__card' style={{ backgroundColor:backgroundColor }}>
        <section className='projects__card-info'>
          <h4>{title}</h4>
          <p>{description}</p>
        </section>
        <Image className='projects__card-image' src={image} alt={title} />
      </article>
  )
}

export default ProjectCard