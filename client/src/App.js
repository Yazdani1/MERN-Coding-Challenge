import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PagenotFound from "./components/PagenotFound";
import DashboardprotectedRoute from "./components/DashboardprotectedRoute";
import ContractsPage from "./components/ContractPage/ContractsPage";
import UsagePage from "./components/UsagePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Protected route for dashboard side */}
        <Route exact path="/">
          <DashboardprotectedRoute DashboardProtect={ContractsPage} />
        </Route>
        <Route exact path="/contracts">
          <DashboardprotectedRoute DashboardProtect={ContractsPage} />
        </Route>

        <Route exact path="/usage">
          <DashboardprotectedRoute DashboardProtect={UsagePage} />
        </Route>

        {/*  Protected route end for dashboard side */}

        {/* page not found  */}

        <Route path="*" exact component={PagenotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
