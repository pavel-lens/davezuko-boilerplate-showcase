const fetchApi = require('../../../lib/fetch-api').fetchApi
// ------------------------------------
// Constants
// ------------------------------------
export const LIST_PEOPLE = 'LIST_PEOPLE'
export const LIST_SPACESHIPS = 'LIST_SPACESHIPS'
export const SET_PEOPLE_NAV_URLS = 'SET_PEOPLE_NAV_URLS'
export const SET_SPACESHIPS_NAV_URLS = 'SET_SPACESHIPS_NAV_URLS'

// URLs
export const API_BASE = 'http://swapi.co/api'
export const API_PEOPLE = `${API_BASE}/people/`
export const API_SPACESHIPS = `${API_BASE}/starships/`

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const listPeople = (page) => {
  return (dispatch, getState) => {
    const state = getState()
    let url

    if (page === 'next') {
      url = state.swapi.nav.people.next
    } else if (page === 'prev') {
      url = state.swapi.nav.people.prev
    } else {
      url = API_PEOPLE
    }

    if (url === null) {
      return Promise.resolve()
    }

    return fetchApi(url)
      .then((data) => {
        console.log(data);

        dispatch({
          type: LIST_PEOPLE,
          payload: data.results,
        })

        dispatch({
          type: SET_PEOPLE_NAV_URLS,
          payload: {
            next: data.next,
            prev: data.previous,
          },
        })
      })
  }
}

export const listSpaceships = (page) => {
  return (dispatch, getState) => {
    const state = getState()
    let url

    if (page === 'next') {
      url = state.swapi.nav.spaceships.next
    } else if (page === 'prev') {
      url = state.swapi.nav.spaceships.prev
    } else {
      url = API_SPACESHIPS
    }

    if (url === null) {
      return Promise.resolve()
    }

    return fetchApi(url)
      .then((data) => {
        console.log(data);

        dispatch({
          type: LIST_SPACESHIPS,
          payload: data.results,
        })

        dispatch({
          type: SET_SPACESHIPS_NAV_URLS,
          payload: {
            next: data.next,
            prev: data.previous,
          },
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
  [SET_PEOPLE_NAV_URLS]   : (state, action) => Object.assign({}, state, {nav: Object.assign({}, state.nav, {people: action.payload})}),
  [SET_SPACESHIPS_NAV_URLS]   : (state, action) => Object.assign({}, state, {nav: Object.assign({}, state.nav, {spaceships: action.payload})}),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = () => ({
  people: [],
  spaceships: [],
  nav: {
    people: {
      next: null,
      prev: null,
    },
    spaceships: {
      next: null,
      prev: null,
    },
  }
})

export default function reducer (state = initialState(), action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
