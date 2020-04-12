import React from "react";
import Header from "../components/Dashboard/Header";
import DashboardSection from "../components/Dashboard/DashboardSection";

const HomePage = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <div className="dashboard-body__main">
          <DashboardSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
