import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className='container section project-details'>
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque cumque corrupti ad asperiores veniam enim maxime natus temporibus nulla. Sint expedita veritatis illum sit. Saepe aspernatur odio libero perferendis!

          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div> Posted by Me </div>
          <div> 10 April 2019 </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
