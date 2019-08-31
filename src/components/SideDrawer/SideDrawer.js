import React from "react";
import "./SideDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArchive,
  faBell,
  faChartBar,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
    // ousiastika apla vazo kai alo ena className sto nav gia perisoters tha borousa na valo arrawy
  }

  return (
    <nav className={drawerClasses}>
      <header className="header_margin">
        <h3 className="H3_padding">Navigation</h3>
        <a href="#0" className="cd-close-nav">
          Clsoe
        </a>
      </header>

      {/* <ul className="list">
        <li className="list-item">
          <a href="/">
            <FontAwesomeIcon icon={faAddressBook} size="2x" />
            <p>Address Book</p>
          </a>
        </li>
        <li className="list-item">
          <a href="/">
            <FontAwesomeIcon icon={faArchive} size="2x" />
            <p>Medical Records</p>
          </a>
        </li>
        <li className="list-item">
          <a href="/">
            <FontAwesomeIcon icon={faBell} size="2x" />
            <p>Notifications</p>
          </a>
        </li>
        <li className="list-item">
          <a href="/">
            <FontAwesomeIcon icon={faChartBar} size="2x" />
            <p>Dashboards</p>
          </a>
        </li>
         <li className="list-item">
          <a href="/">
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            <p>Log Out</p>
          </a>
        </li>
      </ul> */}
      <div className="grid">
        <div className="AddressBook">
          <a href="/">
            <FontAwesomeIcon icon={faAddressBook} size="2x" />
            <p>Address Book</p>
          </a>
        </div>
        <div className="MedicalRecords">
          <a href="/">
            <FontAwesomeIcon icon={faArchive} size="2x" />
            <p>Medical Records</p>
          </a>
        </div>
        <div className="Notifications">
          <a href="/">
            <FontAwesomeIcon icon={faBell} size="2x" />
            <p>Notifications</p>
          </a>
        </div>
        <div className="Dashboards">
          <a href="test">
            <FontAwesomeIcon icon={faChartBar} size="2x" />
            <p>Dashboards</p>
          </a>
        </div>
        <div className="LogOut">
          <a href="/">
            <span class="smallbox">
              <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
              <p>Log Out</p>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;

// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
