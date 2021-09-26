import React from "react";
import AddedMembers from "./added-members/AddedMembers";
import "./AddedDetails.css";
import CostTable from "./CostTable";

const AddedDetails = (props) => {
  return (
    <div className="sticky-top" style={{ top: "3%" }}>
      <CostTable addedDevsList={props.addedDevsList} />
      <hr />
      <AddedMembers addedDevsList={props.addedDevsList} />
    </div>
  );
};

export default AddedDetails;
