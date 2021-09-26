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
  const handler = (item, thatBtn) => {
    thatBtn.classList.add("disableMe");
    thatBtn.innerHTML = `<i class="fas fa-user-check"></i> Wellcome`;
    let NewAddedDevsList;
    const dontAddToList = () => {
      const newItem = item.id;
      const check = addedDevs.find((dev) => dev.id === newItem);
      check
        ? (NewAddedDevsList = [...addedDevs])
        : (NewAddedDevsList = [...addedDevs, item]);
    };
    addedDevs.length
      ? dontAddToList()
      : (NewAddedDevsList = [...addedDevs, item]);
    setAddedDevs(NewAddedDevsList);
  };
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-12 col-md-9">
          <Members devs={devs} myHandler={handler} />
        </div>
        <div className="col-12 col-md-3">
          <AddedDetails addedDevsList={addedDevs} />
        </div>
      </div>
    </div>
  );
};

export default Team;
