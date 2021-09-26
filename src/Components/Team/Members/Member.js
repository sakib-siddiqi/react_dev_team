import React from "react";

const Member = (props) => {
  const { dev, myHandler } = props;
  const { name, img, experience, country, role, selery, language_icon } = dev;
  const [icon_one, icon_two, icon_three] = language_icon;
  return (
    <article className="col">
      <div className="card bg-white border-0 member-card">
        <div className="text-center mt-3">
          <img src={img} className="circle-img" alt={name} />
        </div>
        <div className="card-body my-2 text-center ">
          <h4 className="member-name fw-bold mb-3">{name}</h4>
          <p className="my-text mb-2">
            {role} ( {experience} years )
          </p>
          <p className="my-text">
            <i className="fas fa-location-arrow location-icon"></i>
            <span className="country"> {country}</span>
          </p>
          <hr />
          <div className="selery-wrap text-center">
            <h4 className="selery d-inline-block py-2 px-3 rounded-2">
              <i className="fas fa-dollar-sign"></i> {selery}
            </h4>
          </div>
          <div className="skill-box my-3">
            <div className="skill center">
              <i className={icon_one}></i>
            </div>
            <div className="skill center">
              <i className={icon_two}></i>
            </div>
            <div className="skill center">
              <i className={icon_three}></i>
            </div>
          </div>
          <button className="add-btn mt-4 mb-3" onClick={(thisBtn) => myHandler(dev,thisBtn.target)}>
            <i className="far fa-user-circle"></i> Add To Team
          </button>
        </div>
      </div>
    </article>
  );
};

export default Member;
