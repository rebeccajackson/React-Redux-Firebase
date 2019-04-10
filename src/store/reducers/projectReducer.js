const initialState = {
  projects: [
    {id: '1', title: 'plant snowpea seeds', content: 'seeds dirt water'},
    {id: '2', title: 'clean garage', content: 'broom throw out trash'},
    {id: '3', title: 'surf on saturday', content: 'togs towel board'}
  ]
}

const projectReducer = (state = initialState, action) => {
  return state
}

export default projectReducer