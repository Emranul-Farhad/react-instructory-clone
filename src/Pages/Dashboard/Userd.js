import React from 'react';




const Userd = ({ userd }) => {

    const makeadmin = (email) => {
        fetch(`https://shielded-chamber-79155.herokuapp.com/users/admin/${email}`, {
            method: "PUT"
        })
            .then(res => {
                if (res.status === 401) {
                    console.log("sorry");
                    alert("You cannot make a admin ")
                }
                res.json()
            })
            .then(data => {
                console.log(data, "adj");
            })
    }

    return (
        <div>
            <h6></h6>
            <div>
               { userd?.role === "admin" ? <h6 className='text-left d-none' > {userd.email} </h6> : <h6> {userd?.email} </h6> }
               
                {
                    userd?.role === "admin" ? <button disabled={userd?.role === 'admin'} 
                     className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> admin </button> :
                        <button onClick={() => makeadmin(userd.email)} className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> make admin</button>
                }
            </div>
        </div>
    );
};

export default Userd;