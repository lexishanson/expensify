// Higher Order Component - A component that renders another Component

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      <p>Here are a few of my favorite things</p>
      {props.isAuthenticated ? (
        <p>Welcome, you are logged in!</p>
      ) : (
        <p> Please log in to view page.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// requireAuthentication

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="These are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="login status" />,
  document.getElementById("app")
);
