import React from 'react';

const AddedSingleMember = (props) => {
    return (
        <h5 className="addedSingleMember mb-3 ">
            @ {props.name}
        </h5>
    );
};

export default AddedSingleMember;