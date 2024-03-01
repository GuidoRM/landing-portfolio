import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import Project1 from '@/public/assets/projects/project_1.png';
import Project2 from '@/public/assets/projects/project_1.png';
import Project3 from '@/public/assets/projects/project_1.png';

import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      backgroundColor: "#FE5F3B",
      title: "MoveBike",
      description: "Plataforma para renta de motos",
      image: Project1
    },
    {
      backgroundColor: "#00B451",
      title: "Academia Landrada",
      description: "Platform for training consultants",
      image: Project2
    },
    {
      backgroundColor: "#129bffd4",
      title: "Academia Landrada",
      description: "Platform for training consultants",
      image: Project3
    },
    {
      backgroundColor: "#FE5F3B",
      title: "MoveBike",
      description: "Plataforma para renta de motos",
      image: Project1
    },
    {
      backgroundColor: "#00B451",
      title: "Academia Landrada",
      description: "Platform for training consultants",
      image: Project2
    },
    {
      backgroundColor: "#129bffd4",
      title: "Academia Landrada",
      description: "Platform for training consultants",
      image: Project3
    },
    {
      backgroundColor: "#FE5F3B",
      title: "MoveBike",
      description: "Plataforma para renta de motos",
      image: Project1
    },
    {
      backgroundColor: "#00B451",
      title: "Academia Landrada",
      description: "Platform for training consultants",
      image: Project2
    },
    {
      backgroundColor: "#129bffd4",
      title: "Academia Landrada",
      description: "Platform for training consultants",
      image: Project3
    }
  ]

  return (
    <section className='projects'>

      <section className='projects__header'>
        <h3 className='projects__header-title'>My Work Experience</h3>
        <div className='d-flex align-items-center justify-content-between mt-2 mb-lg-5 mb-2'>
          <p className='projects__header-description'>Perfect solutions for digital experience</p>
          <a className='projects__header-link d-none d-md-block' href="#">Explore More Works</a>
        </div>
      </section>


      <Swiper
        // install Swiper modules
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 21
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 21
          }
        }}
        lazyPreloadPrevNext={true}
        scrollbar={{ draggable: true }}
        centeredSlidesBounds={true}
      >
        {
          projects.map((project) => (
            <SwiperSlide key={project.title} >
              <ProjectCard title={project.title} description={project.description} image={Project1} backgroundColor={project.backgroundColor} />
            </SwiperSlide>

          ))
        }
      </Swiper>
    </section>
  )
}

export default Projects