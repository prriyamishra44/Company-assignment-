import React from "react";
import classes from "./Sidebar.module.css";
import {Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
          <li>
            <Link to="/gallary">Gallery</Link>
          </li>
          <li>
            <Link to="/todo">ToDo</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
