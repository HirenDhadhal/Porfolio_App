import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';
import { BsDot } from 'react-icons/bs';
function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Achievements & Certificate</h1>
                    {achievementData.ach1.map(achieve => ( 
                       <h4 style={{color:'#de00ac'}} ><BsDot />{achieve.bio}</h4>
                    ))}
                </div>
                <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        certificate={achieve.certificate}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievement
