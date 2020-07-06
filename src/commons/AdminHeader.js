import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";

function AdminHeader() {
  const AdminMenu = [
    <Link to="/homepage">
      <Button>HomePage</Button>
    </Link>,
    <Link to="/articlelist">
      <Button>Articles</Button>
    </Link>,
    <Link to="/projectlist">
      <Button>Projects</Button>
    </Link>,
  ];

  return (
    <div className="App">
      <PageHeader ghost={false} title="DynDash" extra={AdminMenu} />
    </div>
  );
}

export default AdminHeader;
