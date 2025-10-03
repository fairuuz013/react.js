import React from "react";
import Userinfo from "./UserInfo";
import CommenText from "./CommentText";

function Comment({ user, text }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", marginTop: "10px" }}>
      <Userinfo user={user} />
      <CommenText text={text} />
    </div>
  );
}

export default Comment;