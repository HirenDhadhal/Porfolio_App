import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import { AiOutlineFolder } from 'react-icons/ai';
import './Experience.css';

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  desc,
  certificate,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      '&:hover': {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className='expcard-img' style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === 'light' ? expImgBlack : expImgWhite}
            alt=''
          />
        </div>
        <div className='experience-details'>
          <h5 style={{ color: '#747200' }}>
            {startYear}-{endYear}
          </h5>
          <h3 style={{ color: '#de00ac' }}>{jobtitle}</h3>
          <h4 style={{ color: 'rgb(141 48 167)' }}>{company}</h4>
          <h6 style={{ color: theme.tertiary80 }}>{desc}</h6>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
