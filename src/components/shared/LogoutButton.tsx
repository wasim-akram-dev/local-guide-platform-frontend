"use client";

import { Button } from "../ui/button";

const LogoutButton = () => {
  const handleLogout = async () => {
    console.log("handleLogout from LogoutButton");
  };

  return (
    <Button variant={"destructive"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
