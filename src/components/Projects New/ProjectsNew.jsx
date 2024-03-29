import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsNew.scss'

import roshni from './img/eroshni.png'
import nurse from './img/Nurse.png'

function ProjectsNew() {
  return (
    <>
    <div className='project1'>
      <h1>Crafted With Love.Built With Passion</h1>
    </div>

    <div className='project2'>
      <div className='left'>
        <img src={roshni}></img>
      </div>
      <div className='right'>
        <h1>e-Roshni</h1>
        <h4>AI/Ml Based Cataract Detection Application</h4>
        <p>Artificial Intelligence and Machine Learning Based Cataract Detection Application</p>
        <Link to="/#" className='link'>
          View Case Study
          <i class="fa fa-arrow-right"></i>
          </Link>
        
      </div>
    </div>

    <div className='project3'>

      <div className='left'>
        <h1>Nurse Mentoring Application</h1>
      <Link to="/#" className='link'>
          View Case Study
          <i class="fa fa-arrow-right"></i>
          </Link>
      </div>

      <div className='right'>
        <img src={nurse} alt=''></img>
      </div>
    </div>
    </>
  )
}

export default ProjectsNew