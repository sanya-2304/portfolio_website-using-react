import React from 'react'
import './projects.css'
import chatApp from '../../assets/assets/Messaging_Chatting Web App.jpeg'
import vid from '../../assets/assets/vid.png'
import todo from '../../assets/assets/ToDo List Inspiration.jpeg'
import tictac from '../../assets/assets/tic.png'
const Projects = () => {
  return (
    <div>
        <section id='projects' className='procontainer'>
        <h1 className='projex'>Projects</h1>
        <div className='projexContainer'>
          <a href='https://github.com/sanya-2304/react-firebase-chat-app' target='_blank'>
            <img className='proimg' src={chatApp} />
            <h3>Banter</h3>
            <p>ChatApp made using <br/>React-Firebase-tailwind</p>
          </a>
          <a href='https://github.com/sanya-2304/TicTacToe' target='_blank'>
            <img className='proimg' src={tictac} />
            <h3>TicTacToe</h3>
            <p>Game made using React Js</p>
          </a>
          <a href='https://github.com/sanya-2304/Todo-App-' target='_blank'>
            <img className='proimg' src={todo} />
            <h3>ToDo App</h3>
            <p>Manage all your tasks</p>
          </a>
          <a href='https://github.com/sanya-2304/vidTube' target='_blank'>
            <img className='proimg' src={vid} />
            <h3>VidTube</h3>
            <p>Youtube clone</p>
          </a>
        </div>
        </section>
      
    </div>
  )
}

export default Projects
