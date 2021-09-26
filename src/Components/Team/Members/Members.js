import React from 'react';
import Member from './Member';

const Members = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
        </div>
    );
};

export default Members;