import classes from './Chat.module.css';
import React, {useEffect, useState} from 'react';

function UserChat (){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))

      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.chatLlist}>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            {user.status === 'Online' && <span style={{ color: 'green' }}> (Online)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default  UserChat;