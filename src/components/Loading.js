import { useEffect, useState } from "react";
// import classes from "./Loading.module.css";
// import UserProfile from './Profiles';
function Loading() {
  const [users, setUsers] = useState([]);
  // const[selectedUserId, setSelectUserId] =  useState(null);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))

      .catch((error) => console.log(error));
  }, []);

  // const handleUserClick = (userId) =>{
  //     setSelectUserId(userId)
  // }
  
  return (
    <div>
      <div >
        <div></div>
        <div >{
            users.map(user =>(

                <h2>{user.name}</h2>,
                <p>ProfilePicture{users.profilePicture}</p>
            ))
            
            
            }
          

         
        </div>
      </div>
      {/* {selectedUserId && <UserProfile userId={selectedUserId} />} */}
    </div>
  );
}
export default Loading;
