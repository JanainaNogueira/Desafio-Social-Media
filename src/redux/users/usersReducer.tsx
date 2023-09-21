import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

interface UserState{
    name:string
    userName:string
    password:string
    nascimento:string
    email:string
}

const initialState:UserState=({
    name:"",
    userName:"",
    password:"",
    nascimento:"",
    email:""
})

export const usersSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=> {
            state.userName =action.payload.userName;
            state.password = action.payload.password;
        }
    }
})

export const {login} = usersSlice.actions
export const selectUser = (state:RootState)=>state.users

export default usersSlice.reducer