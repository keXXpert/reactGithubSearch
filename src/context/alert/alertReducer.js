const SHOW_ALERT = 'alert/SHOW_ALERT'
const HIDE_ALERT = 'alert/HIDE_ALERT'

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

// action creators
export const hideAlert = () => ({type: HIDE_ALERT})
export const showAlert = (text, type = 'secondary') => ({type: SHOW_ALERT, payload: {text, type}})