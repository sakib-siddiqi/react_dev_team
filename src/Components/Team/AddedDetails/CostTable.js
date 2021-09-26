import React from "react";

const CostTable = (props) => {
  const addedDevsList = props.addedDevsList;

  const costArray = addedDevsList.map(
    (singleAddedDev) => singleAddedDev.selery
  );
  const TotalCost = costArray.reduce(
    (preValue, newValue) => preValue + newValue,
    0
  );
  return (
    <>
      <h4 className="counting mb-3">
        <span>Member : </span> <span>{addedDevsList.length}</span>
      </h4>
      <h4 className="counting">
        <span>Cost : </span>{" "}
        <span>
          <i className="fas fa-dollar-sign"></i> {TotalCost}
        </span>
      </h4>
    </>
  );
};

export default CostTable;
