const initialState={
    currentUser:50,
}
const userReducer = (state=initialState,action) => {
    if(action.type == 'user/login'){
        return{...state,currentUser:10}
    }
    return state
}

export default userReducer