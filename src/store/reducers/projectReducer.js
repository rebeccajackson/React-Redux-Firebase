const initialState = {
  projects: [
    {id: '1', title: 'plant snowpea seeds', content: 'seeds dirt water'},
    {id: '2', title: 'clean garage', content: 'broom throw out trash'},
    {id: '3', title: 'surf on saturday', content: 'togs towel board'}
  ]
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer