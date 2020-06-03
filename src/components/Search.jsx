import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)
    const onSubmit = evt => {
        if (evt.key !== 'Enter') return 
        if (value.trim()) {
            console.log('Make request with: '+ value);
            setValue('')
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