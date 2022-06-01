import React, { useEffect, useState } from 'react';
import Userd from './Userd';




const Users = () => {

    const [usersd, setUsersd] = useState([])
    useEffect(() => {
        fetch("https://shielded-chamber-79155.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsersd(data))
    }, [usersd])

    return (
       <div>
            <div>
            <h2 className='text-left'> {usersd.length}  </h2>
            {
                usersd.map(userd => <Userd userd={userd}></Userd>)
            }
        </div>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia!</h5>
       </div>
    );
};

export default Users;