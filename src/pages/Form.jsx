import React from 'react'
import Navbar from '../component/Navbar'
import UserForm from '../component/UserForm'
import UsersCard from '../component/UsersCard'
import Footer from '../component/Footer'

function Form() {
  return (
    <>
      <div className='formpg'>
          <Navbar />
          <UserForm />
          <UsersCard />
      </div>
          <Footer />
    </>
  )
}

export default Form