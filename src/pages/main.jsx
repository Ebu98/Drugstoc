import React, { useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/Navbar";
import SearchBar from "../components/searchBar/SearchBar";
import Sidebar from "../components/sidebar/sidebar";
import { deleteCollection, getAllCollections } from "../helpers";
import './main.css'

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (ref) => {
    const prompt = window.confirm("Are you sure you want to delete task?");
    if (prompt) {
      deleteCollection(ref, tasks, setTasks);
    }
  };

  useEffect(() => {
    getAllCollections("tasks")
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <div className="sidebar-hero">
        <Sidebar tasks={tasks} />
        <Hero tasks={tasks} deleteTask={deleteTask} />
      </div>
      
    </div>
  );
};

export default Main;
