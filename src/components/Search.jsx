import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = (props) => {
    const {show} = useContext(AlertContext)
    const onSubmit = evt => {
        if (evt.key === 'Enter') show ('This is alert')
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className='form-control'
                placeholder='Enter user nickname...'
                onKeyPress={onSubmit} />
        </div>
    )
}

export default Search