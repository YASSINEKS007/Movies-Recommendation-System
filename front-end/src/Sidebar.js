import React from "react";
import { FaBars, FaTimes, FaQrcode, FaLink, FaStream, FaCalendarWeek, FaQuestionCircle, FaSlidersH, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <FaBars id="btn" />
        <FaTimes id="cancel" />
      </label>
      <div className="sidebar">
        <header>My App</header>
        <ul>
          <li><a href="#"><FaQrcode />Dashboard</a></li>
          <li><a href="#"><FaLink />Shortcuts</a></li>
          <li><a href="#"><FaStream />Overview</a></li>
          <li><a href="#"><FaCalendarWeek />Events</a></li>
          <li><a href="#"><FaQuestionCircle />About</a></li>
          <li><a href="#"><FaSlidersH />Services</a></li>
          <li><a href="#"><FaEnvelope />Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
