import React from "react";
import AddedMembers from "./added-members/AddedMembers";
import "./AddedDetails.css";
import CostTable from "./CostTable";

const AddedDetails = () => {
  return (
    <div className="sticky-top" style={{ top: "3%" }}>
      <CostTable />
      <hr />
      <AddedMembers />
    </div>
  );
};

export default AddedDetails;
