import { Button } from '@mui/material'
import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';


export const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name)
    dispatch(addUser(name));
  }

  return (
    <div style={{minWidth:'500px'}}>
    <h1>UserDetails</h1>

    <div>
        <div style={{display:'flex', background:'lightblue', justifyContent:'space-between', alignItems:"center", padding:'10px'}}>
            <div>List of User details</div>
            <Button variant="contained" color="success" onClick={()=>addNewUser(fakeUserData())}>Add new Users</Button>
        </div>

        <ul style={{listStyle:'none', textAlign:'left'}}> 
            <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUsers />
    </div>
    </div>
  )
}
