const CLEAR_USERS = 'github/CLEAR_USERS'
const GET_REPOS = 'github/GET_REPOS'
const GET_USER = 'github/GET_USER'
const SEARCH_USERS = 'github/SEARCH_USERS'
const SET_LOADING = 'github/SET_LOADING'


const handlers = {
    [CLEAR_USERS]: (state) => ({...state, users: []}),
    [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
    [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [SET_LOADING]: (state) => ({...state, loading: true}),
    DEFAULT: state => state
}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

// action creators
export const clearUsersAC = () => ({type: CLEAR_USERS})
export const setLoading = () => ({type: SET_LOADING})
export const setRepos = (repos) => ({type: GET_REPOS, payload: repos})
export const setUser = (user) => ({type: GET_USER, payload: user})
export const setUsers = (users) => ({type: SEARCH_USERS, payload: users})