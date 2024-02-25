import React from 'react'

const ExperienceCard = ({company, date, position, description, color}) => {
    return (
        <article className='experiencies__position grid'>

            <article className='experiencies__role col-5 d-none d-lg-block'>
                <h3 className='experiencies__role-title'>{company}</h3>
                <time className="experiencies__role-date" dateTime=''> {date} </time>
            </article>

            <section class="experiencies__point">
                <div className='experiencies__point-center' style={{backgroundColor:color}}></div>
                <div className='experiencies__point-line'></div>
            </section>

            <section class="experiencies__job">
                <h2 className='experiencies__job-title'>{position}</h2>
                <p className='experiencies__job-description'>{description}</p>
            </section>
        </article>
    )
}

export default ExperienceCard;

