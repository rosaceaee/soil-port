import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import { Bottom } from "./assets/Bottom";
import { Cursor } from "./assets/Cursor";
import { Contents } from "./assets/Contents";

function App({ handleMouseOver, handleMouseLeave }) {
  return (
    <div className="App">
      <Cursor>
        <Contents />
      </Cursor>
    </div>
  );
}

export default App;
