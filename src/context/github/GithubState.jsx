import React, { useReducer } from 'react'
import axios from 'axios'
import { githubReducer, setUsers, setRepos, setUser, clearUsersAC, setLoading } from './githubReducer'
import { GithubContext } from './githubContext'

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const GithubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [{user, users, loading, repos}, dispatch] = useReducer(githubReducer, initialState)
    const search = async value => {
        toggleLoading()
        const response = await axios.get(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        dispatch(setUsers(response.data.items))
        console.log(response.data.items);
    }

    const getUser = async name => {
        toggleLoading()
        // ...fetching data here
        dispatch(setUser({}))
    }
    const getRepos = async name => {
        toggleLoading()
        // ...fetching data here
        dispatch(setRepos([]))
    }

    const clearUsers = () => dispatch(clearUsersAC())
    const toggleLoading = () => dispatch(setLoading())

    return (
        <GithubContext.Provider value={{
            toggleLoading, clearUsers, search, getUser, getRepos,
            user, users, loading, repos
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubState