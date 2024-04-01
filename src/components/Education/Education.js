import React, { useContext } from 'react';
import edup from '../../assets/png/educationp.jpg';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            degree={edu.degree}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            gpa={edu.gpa}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={edup} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
