import React from 'react'
import './hero.css'
import heroImg from '../../assets/assets/profile_img.png'
import sun from '../../assets/assets/sun.svg'
import moon from '../../assets/assets/moon.svg'
import linkedinLight from '../../assets/assets/linkedin-light.svg'
import linkedinDark from '../../assets/assets/linkedin-dark.svg'
import gitLight from '../../assets/assets/github-light.svg'
import gitDark from '../../assets/assets/github-dark.svg'
import leeticon from'../../assets/assets/leeticon.png'
import instaiconl from'../../assets/assets/instagram.png'
import instadark from '../../assets/assets/instadark (2).png'
import resume from '../../assets/assets/Resume_sanya_doda updated with pp.pdf'

import { useTheme } from '../../common/ThemeContext'
const Hero = () => {
  const {theme, toggleTheme}=useTheme();

  const themeIcon=theme==='light'? sun:moon;
  const linkedinIcon=theme==='light'? linkedinLight:linkedinDark;
  const gitIcon=theme==='light'? gitLight:gitDark;
  const instaicon=theme==='light'? instaiconl :instadark;
  return (
    <section id='hero' className='container'>
    
     <div className='info'>
      <h1>Sanya <br/>Doda</h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href='https://www.linkedin.com/in/sanya-doda-774241216/' target='_blank'><img src={linkedinIcon}/></a>
        <a href='https://github.com/sanya-2304' target='_blank'><img src={gitIcon}/></a>
        <a href='https://leetcode.com/u/Sanyadoda/' target='_blank'><img src={leeticon}/></a>
        <a href='https://leetcode.com/u/Sanyadoda/' target='_blank'><img src={instaicon}/></a>
      </span>
      <p className='description'>4th-year Engineering student passionate about web development and problem-solving.</p>
      <a href={resume} target='_blank'><button className='heroBtn'>Resume</button></a>
     </div>
     <div className='containerDiv'>
        <img className='heroImg' src={heroImg} alt='' />
        <img className='colorMode'  src={themeIcon} alt='' onClick={toggleTheme} />
     </div>
    </section>
  )
}

export default Hero
