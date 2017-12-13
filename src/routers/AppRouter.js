import React from "react";
import { BrowserRouter, NavLink, Link, Route, Switch } from "react-router-dom";

import NotFound from "../components/pages/NotFound";
import ExpenseDashboard from "../components/pages/ExpenseDashboard";
import AddExpense from "../components/pages/AddExpense";
import EditExpense from "../components/pages/EditExpense";
import ExitExpense from "../components/pages/AddExpense";
import Header from "../components/Header";
import Help from "../components/pages/Help";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id?" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
