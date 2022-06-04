// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firekey/Firekey";




const Usetoken = user => {

    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email;
        const userinfo = {email:email}
        if (email) {
            // https://shielded-chamber-79155.herokuapp.com/usercollection/${email}
            const url =`http://localhost:8000/usercollection/${email}`
            console.log(url);
            fetch(url, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userinfo),
            })
                .then(res => res.json())
                .then(data => console.log(data, "get from here"))
        }
    }, [user])



    return [token]

};

export default Usetoken;





//   import React from 'react';
  
//   const Usetoken = user => {


//       const [token , setToken] = useState('')
//       useEffect(()=> {
//           console.log(user);
//           console.log(user?.user?.email);
//           const url = ``

//       },[user] )

  

//       return [token]
         
      
//   };
  
//   export default Usetoken;