import React from "react";
import "./hero.css";

function Hero({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      <div className="container-wrapper">
        {tasks.length ?
          tasks.map(({ task, ref }) => (
            <div key={task.id} className="container">
              <div className="hero-container">
                <span>{task.task}</span>
                <p className="text=button">{task.tag}</p>
              </div>
              <div className="hero-container-two">
                <p>₦{task.price}</p>
                <span>Task price</span>
                <span>Delivery:within 3 day</span>
              </div>
              <div className="hero-container-three">
                <img src="../assets/2nd woman.png" alt="" />
                <div className="hero-three-span">
                  <p>{task.username}</p>
                  <span>assigned to</span>
                </div>
              </div>
              <div className="hero-task">
                <ul>
                  <li>{task.status}</li>
                </ul>
              </div>
              <div className="delete">
                <button onClick={() => deleteTask(ref)} className="btn-delete"><img src="../assets/delete.png" alt="" /></button>
              </div>
            </div>
          )) : "No Task Yet"}
      </div>
    </div>
  );
}
export default Hero;
