import React from 'react'
import checkDark from '../../assets/assets/checkmark-dark.svg'
import checkLight from '../../assets/assets/checkmark-light.svg'
import './skills.css'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const checkIcon = theme === 'light' ? checkLight   : checkDark;
  return (
    <section id='skills' className='skillsContainer'>
    <div>
      <h1 className='sectionTitle'>Tech Stack</h1>
      <div className="skillList">
       <SkillList src={checkIcon} skill="HTML" />
       <SkillList src={checkIcon} skill="CSS" />
       <SkillList src={checkIcon} skill="Javascript" />
       <SkillList src={checkIcon} skill="React_Js" />
      </div>
      <hr /> 
      <div className="skillList">
      <SkillList src={checkIcon} skill="React_Redux" />
       <SkillList src={checkIcon} skill="Python" />
       <SkillList src={checkIcon} skill="C++" />
       </div>
      <hr />
      <div className="skillList">
      <SkillList src={checkIcon} skill="Firebase" />
       <SkillList src={checkIcon} skill="NodeJs" />
       <SkillList src={checkIcon} skill="Git" />
       </div>
  
  
       
    
    </div></section>
  )
}

export default Skills
