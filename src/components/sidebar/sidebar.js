import React from "react";
import "./sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <div className="tag-container">
        <h3>Tags</h3>
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Custom task
        </label>{" "}
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Marketing & sales
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Integrations
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Optimization
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Depolyment
        </label>
        <br />
        <label>
          <input type="checkbox" name="indoor-outdoor" /> Testing
        </label>
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
