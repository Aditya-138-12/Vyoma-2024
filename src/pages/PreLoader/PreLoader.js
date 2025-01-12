import React from "react";
import "./preLoader.css";
import Logo from "./Preloader.svg";

function PreLoader() {
  return (
    <div className="preLoader">
      <img className="preLoaderLogo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vrkTmxcLKYzOO7EaBsw0n7_IhOXXtJCfWg&s"} alt="preloader" style={{ borderRadius: "50%", display: "inline", height: "200px", width: "200px" }} />
      <img className="preLoaderLogo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkjF6sRWmlB9MXSzNODhIHRzscT8OY-UpXUtjE1wySs0Sjjhv-kf7zl0-1hrghpacvZs&usqp=CAU"} alt="preloader" style={{ borderRadius: "50%", display: "inline", height: "200px", width: "200px" }} />
      <h1 className="preLoaderheading">VYOMA 24</h1>
    </div>
  );
}

export default PreLoader;
