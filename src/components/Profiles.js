import React, { useState, useEffect} from "react";


function UserProfile(props) {
  const [userData, setUsersData] = useState(props);

  useEffect(() => {
   async function fetchUserData(){
    const response = await fetch('https://panorbit.in/api/users.json');
    const data = await response.json();
    console.log(data);

    const user = data.users.find(user => user.id === props.useId);
    setUsersData(user)
   }
   fetchUserData();
  },[props.userData]);

  if (!userData) {
    console.log(userData);
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      
      <h1>{userData.name}</h1>

      <img src={userData.profilepicture} alt={userData.name} />
      <div>
        <p>Email:{userData.Email}</p>
        <p>Phone:{userData.Phone} </p>
        <p>Website: {userData.website}</p>
        <p>Company:{userData.Company.name} </p>
      </div>
    </div>
  );
}

export default UserProfile;
