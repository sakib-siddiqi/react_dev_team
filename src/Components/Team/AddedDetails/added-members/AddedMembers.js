import React from "react";
import AddedSingleMember from "./AddedSingleMember";

const AddedMembers = (props) => {
  const addedDevsList = props.addedDevsList;
  return (
    <div className="addedMembersBox">
      {addedDevsList.map((singleAddedDev) => (
        <AddedSingleMember name={singleAddedDev.name} key={singleAddedDev.id} />
      ))}
    </div>
  );
};

export default AddedMembers;
