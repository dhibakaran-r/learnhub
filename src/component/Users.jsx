import React, { useEffect, useState } from 'react'
import { getUserDatas } from '../userDatas';

function Users() {

  const [usersCounts, setUsersCounts] = useState({
    total: 0,
    placed: 0,
    unplaced: 0,
  });

  useEffect(() => {
    const users = getUserDatas();
    const total = users.length;
    const placed = users.filter((user) => user.status === "Placed").length;
    const unplaced = total - placed;
    setUsersCounts({ total, placed, unplaced });
  }, []);

  const counts = [
    {
      title: 'Total Students',
      count: usersCounts.total
    },
    {
      title: 'Placed Students',
      count: usersCounts.placed
    },
    {
      title: 'Unplaced Students',
      count: usersCounts.unplaced
    },
  ]

  return (
    <section className='users-container'>
      <div className='users-wrap'>
        <div className='users-block'>
          <div className='users-desc-block'>
            <div className='users-desc'>
              <p>Empower your future with cutting-edge skills</p>
              <p>New, Embrace innovation, master technology, & shape the digital world</p>
              <p>Your journey to success starts here.</p>
            </div>
          </div>
          <div className='users-detail-wrap'>
            <div className='users-detail'>
              <p className='user-header'>Join our course with a proven track record of success, where learning isn't just about gaining
                skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.
              </p>
              <div className='users-count-wrap'>
                <div className='users-count'>
                  {
                    counts.map((count, index) => {
                      return (
                        <div className='counts' key={index}>
                          <div className='count-card'>
                            <div>{count.title}</div>
                            <p>{count.count}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Users