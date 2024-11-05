import React, { useEffect, useState } from 'react'
import { getUserDatas, saveDatas } from '../userDatas';

function UserForm() {
    const [user, setUser] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        course: "",
        status: "Placed",
    });

    useEffect(()=>{
        getUserDatas();
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        const currentUsers = getUserDatas();
        const updatedUsers = [...currentUsers, user];
        saveDatas(updatedUsers);
        setUser({
            name: "",
            role: "",
            email: "",
            phone: "",
            course: "",
            status: "Placed"
        })
    };

    const course = [
        {
            courseName: "React Basic"
        },
        {
            courseName: "UI/UX Design"
        },
        {
            courseName: "Javascript Fundamentals"
        },
        {
            courseName: "Advanced CSS"
        },
        {
            courseName: "Backend Development"
        },
    ]

    return (
        <div className='form-container'>
            <form className='user-form' onSubmit={handleAddUser}>
                <h1>Fill This Form</h1>
                <div className='form-wrap'>
                    <div className='input-wrap'>
                        <div className='form-input'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' id='name' name='name' className='input' value={user.name} placeholder='Enter your name' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='input-wrap'>
                        <div className='form-input'>
                            <label htmlFor='role'>Role:</label>
                            <input type='text' id='role' name='role' className='input' value={user.role} placeholder='Enter your role' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='input-wrap'>
                        <div className='form-input'>
                            <label htmlFor='email'>Email:</label>
                            <input type='mail' id='email' name='email' className='input' value={user.email} placeholder='Enter your email' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='input-wrap'>
                        <div className='form-input'>
                            <label htmlFor='phone'>Phone Number:</label>
                            <input type='text' id='phone' name='phone' className='input' value={user.phone} placeholder='Enter your phone number' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='input-wrap'>
                        <div className='form-input'>
                            <label htmlFor='course'>Course:</label>
                            <select id='course' className='input opt' name='course' onChange={handleChange} >
                                <option>Select a course</option>
                                {
                                    course.map((cours, index) => {
                                        return (
                                            <option key={index} value={cours.courseName}>{cours.courseName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='input-wrap'>
                        <div className='form-input'>
                            <label htmlFor='status'>Status:</label>
                            <select id='status' name='status' className='input opt' onChange={handleChange} >
                                <option value={'Placed'}>Placed</option>
                                <option value={'Unplaced'}>Unplaced</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='form-btn'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm