import React from 'react';

const Adminseperate = ({admin}) => {

    return (
        <div>
           { admin.role === "admin" && <h6> {admin.email} </h6> }
        </div>
    );
};

export default Adminseperate;