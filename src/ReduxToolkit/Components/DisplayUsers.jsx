import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.users);
    console.log(data);

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }

    return (
       <>
            {
                data.map((user, id) => {
                    return(
                        <li key={id} style={{display:'flex', justifyContent:"space-between"}}>
                            {user}

                            <MdDeleteForever onClick={()=>deleteUser(id)} style={{fontSize:'25px', cursor:'pointer', color:'red'}}/>
                        </li>
                    )
                })
            }
       </>
    )
}

export default DisplayUsers;