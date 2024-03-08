import React from 'react'
import ExperienceCard from './ExperienceCard';

const Experiences = () => {

    const workExperience = [
        {
            company: "Landrada Desarrollo S.A de C.V.",
            position: "FullStack Developer JS",
            date: "Nov 21 - Current",
            color: "#008000",
            description: "I design and develop strategic solutions for the company's web development. I also implement the integration of cloud services and technologies such as AWS. I also design interfaces based on user experience."
        },
        {
            company: "MotoKoor",
            position: "WordPress Web Developer",
            date: "March 20 - Nov 21",
            color: "#2fc3f5",
            description: "I design and develop strategic solutions for the company's web development. I also implement the integration of cloud services and technologies such as AWS. I also design interfaces based on user experience."
        },
        {
            company: "Tiendas Eagle Eyes",
            position: "Junior WordPress Web Developer",
            date: "Nov 18 - Aug 19",
            color: "#f5b02f",
            description: "I design and develop strategic solutions for the company's web development. I also implement the integration of cloud services and technologies such as AWS. I also design interfaces based on user experience."
        }
    ];
    

    return (
        <>
            <main className='experiencies container-fluid'>
                <h2 className='experiencies__title'>My Work Experiences</h2>

                <section className='experiencies__wrapper'>

                    {
                        workExperience.map(experience => (
                            <ExperienceCard company={experience.company} color={experience.color} date={experience.date} description={experience.description} position={experience.position} key={experience.date}/>
                        ))
                    }

                </section>
            </main>
        </>

    )
}

export default Experiences