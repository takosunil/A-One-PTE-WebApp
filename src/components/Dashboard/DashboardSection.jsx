import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import MainSection from "./MainSection";
import QuestionPage from "../../pages/QuestionPage";

const DashboardSection = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/question" component={MainSection} />
      <Route exact path="/question/wfd" component={QuestionPage} />
      <Route exact path="/" component={MainSection} />
    </Switch>
  );
};

export default DashboardSection;
