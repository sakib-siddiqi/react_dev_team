import React from "react";

const CostTable = () => {
  return (
    <>
      <h4 className="counting mb-3">
        <span>Member : </span> <span>{20}</span>
      </h4>
      <h4 className="counting">
        <span>Cost : </span> <span><i className="fas fa-dollar-sign"></i> {20000}</span>
      </h4>
    </>
  );
};

export default CostTable;
