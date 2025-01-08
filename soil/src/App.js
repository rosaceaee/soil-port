import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import { Bottom } from "./assets/Bottom";
import { Cursor } from "./assets/Cursor";
import { Contents } from "./assets/Contents";
import { Temp } from "./assets/Temp";
function App({ handleMouseOver, handleMouseLeave }) {
  return (
    <div className="App">
      <Cursor>
        <Bottom />
      </Cursor>
    </div>
  );
}

export default App;
