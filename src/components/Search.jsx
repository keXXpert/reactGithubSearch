import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

const Search = () => {
    const [value, setValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const {search, clearUsers} = useContext(GithubContext)
    const onSubmit = evt => {
        if (evt.key !== 'Enter') return 
        clearUsers()
        if (value.trim()) {
            search(value.trim())
            hide()
        } else {
            show('Please enter a valid search request!')
        }
    }

    return (
        <div className="form-group">
            <input
                value={value}
                type="text"
                className='form-control'
                placeholder='Enter user nickname...'
                onChange={e=> setValue(e.target.value)}
                onKeyPress={onSubmit} />
        </div>
    )
}

export default Search