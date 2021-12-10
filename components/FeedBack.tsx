import React from "react";
import useAuth from "../hooks/auth.hook";
import DashBoardItems from "./DashBoardItems";

function FeedBack() {
  const user = useAuth();
  return (
    <div>
      <DashBoardItems user={user} />
    </div>
  );
}

export default FeedBack;
