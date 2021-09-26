import React, { useEffect, useState } from "react";
import AddedDetails from "./AddedDetails/AddedDetails";
import Members from "./Members/Members";
import "./Team.css";
const Team = () => {
  const [devs, setDevs] = useState([]);
  const [addedDevs, setAddedDevs] = useState([]);
  useEffect(() => {
    fetch("./dev_data.json")
      .then((res) => res.json())
      .then((data) => setDevs(data));
  }, []);
  const handler = (item) => {
    const NewAddedDevsList = [...addedDevs, item];
    setAddedDevs(NewAddedDevsList);
    console.log("new devs", addedDevs);
    // addedDevs.includes(item) ? console.log(false) : console.log(true);
  };
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-12 col-md-9">
          <Members devs={devs} myHandler={handler} />
        </div>
        <div className="col-12 col-md-3">
          <AddedDetails addedDevsList={addedDevs}/>
        </div>
      </div>
    </div>
  );
};

export default Team;
