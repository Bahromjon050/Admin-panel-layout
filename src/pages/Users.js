import React from "react";
import Sidebar from "../layout/Sidebar";
import User from "../components/User";

const Users = () => {
  return <Sidebar data={<User />} />;
};

export default Users;
