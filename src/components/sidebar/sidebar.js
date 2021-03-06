import React from "react";
import "./sidebar.css";

function Sidebar({tasks}) {
  return (
    <div className="sidebar-container">
      <div className="tag-container">
        <h3>Tags</h3>
        { tasks ?
          tasks.map(({ task }) => (
          <label key={task.id}>
            <input type="checkbox" name="indoor-outdoor" /> {task.tag}
            <br />
          </label>
        )) : "No Task Yet"}
        <br/>
      </div>
      <div className="task-container">
        <h3>Task Price Range</h3>
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Less than N100
        </label>{" "}
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> N100-N300
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> N901-N912
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> N991-1000
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Above N1000
        </label>
        <br />
      </div>
    </div>
  );
}

export default Sidebar;
