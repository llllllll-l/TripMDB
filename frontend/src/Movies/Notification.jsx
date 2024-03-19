import React from "react";

const Notification = ({ message }) => {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
