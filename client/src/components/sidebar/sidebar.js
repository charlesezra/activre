import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
        className="sidebar-container"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home" className="nav-item">
            <NavIcon className="icon-container">
              <FontAwesomeIcon icon={faHome} className="icon" />
            </NavIcon>
            <NavText className="nav-text">Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Modules</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
