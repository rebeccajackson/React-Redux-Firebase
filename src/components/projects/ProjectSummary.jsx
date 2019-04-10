import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="car-title">{project.title}</span>
        <p>Posted by Me</p>
        <p className="grey-text"> 10 April 2019, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary