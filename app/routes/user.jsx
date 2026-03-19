import React from "react";
import { Outlet } from "@remix-run/react";

function User() {
  return (
    <>
      <div>main user</div>;
      <Outlet />
    </>
  );
}

export default User;
