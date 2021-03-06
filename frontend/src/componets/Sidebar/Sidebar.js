import React from "react";
import Wrapper from "../layout/Wrapper";
import "./Sidebar.css";
import { sidebarData } from "./sidebarData";
import Icon from "../Icon";
const Sidebar = () => {
  return (
    <Wrapper styles="Sidebar">
      <ul className="SidebarList">
        {sidebarData.map((value, key) => {
          return (
            //refactor thisto separate component.
            <li
              className="row"
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => (window.location.pathname = value.link)}
            >
              <Wrapper id="icon">
                <Icon image={value.icon} />
              </Wrapper>
              <Wrapper id="title">{value.title}</Wrapper>
            </li>
          );
        })}
        {/**  <div className="copy-rights">All rights reserved by WetBat</div> */}
      </ul>
    </Wrapper>
  );
};

export default Sidebar;
