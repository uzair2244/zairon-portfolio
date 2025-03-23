import React from "react";
import ChatBotComponent from "../components/ChatBot";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <ChatBotComponent />
    </div>
  );
};

export default Layout;