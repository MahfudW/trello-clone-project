import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'
import { PemberiStateApp } from "../src/state/AppStateContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={Backend}>
      <PemberiStateApp>
        <App />
      </PemberiStateApp>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
//*ini kalau di react NPM, index.ts