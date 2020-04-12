import React from "react";

const Header = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__logo">
        <h1>
          <span className="dashboard-header__logo-name-a">A</span>
          <span>-One</span>
          <span className="dashboard-header__logo-name-pte"> PTE</span>
        </h1>
      </div>
      <div className="dashboard-header__user">
        <p className="dashboard-header__user--name">Sunil Tako</p>
        <p className="dashboard-header__user--role">Student</p>
      </div>
    </div>
  );
};

export default Header;
