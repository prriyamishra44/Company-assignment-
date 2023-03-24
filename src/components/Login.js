import {useEffect, useState} from 'react';
import classes from './Loading.module.css';
import UserProfile from './Profiles';
function Login(){
    const [users, setUsers] = useState([]);
    const[selectedUserId, setSelectUserId] =  useState(null);

    useEffect(()=>{
        fetch('https://panorbit.in/api/users.json')
        .then(response => response.json())
        .then(data => setUsers(data.users))
        
        .catch(error => console.log(error));
        
    },[])
    console.log(users)

    const handleUserClick = (userId) =>{
        setSelectUserId(userId)
    }
    return(
        <div>
        <div className ={classes.container}>
        
        <div className={classes.list}>
            <h2>Select an acount</h2>
            <ul className={classes.nameList}>
                {
                   
                    users.map(user =>(
                        <li key={user.id} onClick={() => handleUserClick(user.id)  }>
                            
                            <img src={user.profilepicture} alt={user.name}/>
                            {user.name}</li>
                    ))
                }
            </ul>
            

            </div>
         </div>
         {selectedUserId && <UserProfile userId={selectedUserId} />}
         </div>
    )
}
export default Login;