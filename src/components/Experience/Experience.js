import React, { useContext } from 'react';
import exp from '../../assets/png/pic-3.jpeg';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';

function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className='experience'
      id='experience'
      style={{ backgroundColor: theme.secondary }}
    >
      <div className='experience-body'>
        <div className='experience-image'>
          <img src={exp} alt='' />
        </div>
        <div className='experience-description'>
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
              desc={exp.desc}
              certificate={exp.certficate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
