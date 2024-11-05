import React, { useEffect, useState } from 'react'
import { getUserDatas, saveDatas } from '../userDatas'

function UsersCard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const storedUsers = getUserDatas();
      setUsers(storedUsers);
    }, [getUserDatas()]);
  
    const deleteUser = (email) => {
      const updatedUsers = users.filter((user) => user.email !== email);
      setUsers(updatedUsers);
      saveDatas(updatedUsers);
    };

  return (
    <section className='card-container'>
        <div className='card-wrap'>
            {
               users.map((users, index)=>{return (
                <div key={index} className='user-card'>
                    <div className='user-name'>
                        <div className='avator'>{users.name.charAt(0).toUpperCase()}</div>
                        <h3>{users.name}</h3>
                    </div>
                    <div className='user-details'>
                        <p><strong>Role:</strong> {users.role}</p>
                        <p><strong>Email:</strong> {users.email}</p>
                        <p><strong>Phone Number:</strong> {users.phone}</p>
                        <p><strong>Course:</strong> {users.course}</p>
                        <p><strong>Status:</strong> {users.status}</p>
                    </div>
                    <button onClick={() => deleteUser(users.email)} className='delete-btn'>Delete</button>
                </div>
               )}) 
            }
        </div>
    </section>
  )
}

export default UsersCard