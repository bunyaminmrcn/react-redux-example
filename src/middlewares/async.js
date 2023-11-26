export default ({ dispatch }) => next => action => {

    if(!action.payload || !action.payload.then) {
        next(action)
    }

    action.payload.then(response => {
        const newAction = { ...action, payload: response};
        dispatch(newAction);
    })
}