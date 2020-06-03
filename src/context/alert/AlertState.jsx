import React, { useReducer } from 'react'
import { AlertContext } from './alertContext'
import { alertReducer, hideAlert, showAlert } from './alertReducer'

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null)
    const hide = () => dispatch(hideAlert())
    const show = (text, type) => {
        dispatch(showAlert(text, type))
    }

    return (
        <AlertContext.Provider value={{hide, show, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState