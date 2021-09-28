import React from "react";
import Member from "./Member";

const Members = (props) => {
  const MyDevs = props.devs;
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {MyDevs.map((dev) => (
        <Member dev={dev} myHandler={props.myHandler} key={dev.id}/>
      ))}
    </div>
  );
};

export default Members;
