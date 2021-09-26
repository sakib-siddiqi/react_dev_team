import React, { useEffect, useState } from "react";
import AddedDetails from "./AddedDetails/AddedDetails";
import Members from "./Members/Members";
import "./Team.css";
const Team = () => {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    fetch("./dev_data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-12 col-md-9">
          <Members />
        </div>
        <div className="col-12 col-md-3">
          <AddedDetails />
        </div>
      </div>
    </div>
  );
};

export default Team;
