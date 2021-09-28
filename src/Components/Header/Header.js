import React from "react";

const Header = (props) => {
  const { id, data } = props;
  return (
    <h4
      id={id}
      className="py-2 px-3 text-center fw-bold rounded-3 my-3 d-inline-block shadow-sm"
    >
      <i className="fas fa-dollar-sign"></i> {data}
    </h4>
  );
};

export default Header;
