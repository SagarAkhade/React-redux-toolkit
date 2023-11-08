import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from '../store/slices/UserSlice';
import { clearAllUsers } from '../store/actions';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  // This is by normal reducer actions 
  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  }

  // THis delete user from the createActions using the extraReducers
  const deleteAllUsersCreateActions = () => {
    dispatch(clearAllUsers());
  }

  return (
    <>
      <Button color='warning' onClick={() => deleteAllUsers()}>Delete All Users</Button>
      <br />
      <Button color='warning' onClick={() => deleteAllUsersCreateActions()}>Delete All Users By createActions</Button>
    </>
  )
}

export default DeleteAllUsers