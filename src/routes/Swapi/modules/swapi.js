const fetchApi = require('../../../common/fetch-api').fetchApi
// ------------------------------------
// Constants
// ------------------------------------
export const LIST_PEOPLE = 'LIST_PEOPLE'
export const LIST_SPACESHIPS = 'LIST_SPACESHIPS'

// URLs
const API_BASE = 'http://swapi.co/api'
const API_PEOPLE = `${API_BASE}/people/`
const API_SPACESHIPS = `${API_BASE}/starships/`

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const listPeople = () => {
  return (dispatch, getState) => {
    return fetchApi(API_PEOPLE)
      .then((data) => {
        console.log(data);
        dispatch({
          type: LIST_PEOPLE,
          payload: data.results,
        })
      })
  }
}

export const listSpaceships = () => {
  return (dispatch, getState) => {
    return fetchApi(API_SPACESHIPS)
      .then((data) => {
        console.log(data);
        dispatch({
          type: LIST_SPACESHIPS,
          payload: data.results,
        })
      })
  }
}

export const actions = {
  listPeople,
  listSpaceships
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LIST_PEOPLE]     : (state, action) => Object.assign({}, state, {people: action.payload}),
  [LIST_SPACESHIPS] : (state, action) => Object.assign({}, state, {spaceships: action.payload}),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = () => ({
  people: [],
  spaceships: [],
})

export default function reducer (state = initialState(), action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
