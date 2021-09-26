import React from "react";

const Header = (props) => {
  const { id, data } = props;
  return (
    <h3
      id={id}
      className="py-3 px-5 d-inline-block rounded-pill text-center fw-bold rounded-3 my-3 mx-2"
    >
      <i className="fas fa-dollar-sign"></i> {data}
    </h3>
  );
};

export default Header;
