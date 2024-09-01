import React from "react";

// import Header from "./component/Header";

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      {/* <Sidebar /> */}
      {/* <Header /> */}
      {/* <Referral /> */}
      <div className="layout-wrapper">{children}</div>
    </div>
  );
}

export default Layout;
