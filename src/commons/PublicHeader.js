import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";

function AdminHeader() {
  const PublicMenu = [
    <Link to="/">
      <Button>About</Button>
    </Link>,
    <Link to="/articles">
      <Button>Articles</Button>
    </Link>,
    <Link to="/projects">
      <Button>Projects</Button>
    </Link>,
  ];

  return (
    <div className="App">
      <PageHeader ghost={false} title="Shadab Sutar" extra={PublicMenu} />
    </div>
  );
}

export default AdminHeader;
