import React from "react";

const Member = () => {
  return (
      <article className="col">
        <div className="card bg-white border-0 member-card">
          <div className="text-center mt-3">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              className="circle-img"
              alt="..."
            />
          </div>
          <div className="card-body my-2 text-center ">
            <h4 className="member-name fw-bold mb-3">Aria Maria</h4>
            <p className="my-text mb-2">Web Developer ( 7 years )</p>
            <p className="my-text">
              <i className="fas fa-location-arrow location-icon"></i>
              <span className="country"> Bangladesh</span>
            </p>
            <hr />
            <div className="selery-wrap text-center">
              <h4 className="selery d-inline-block py-2 px-3 rounded-2">
                <i className="fas fa-dollar-sign"></i> 2000
              </h4>
            </div>
            <div className="skill-box my-3">
              <div className="skill center">
                <i className="fab fa-react"></i>
              </div>
              <div className="skill center">
                <i className="fab fa-react"></i>
              </div>
              <div className="skill center">
                <i className="fab fa-react"></i>
              </div>
            </div>
            <button className="add-btn my-4">
            <i className="far fa-user-circle"></i> Add To Team
            </button>
          </div>
        </div>
      </article>
  );
};

export default Member;
