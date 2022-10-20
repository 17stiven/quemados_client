import React from "react";
import { Routes, Route, Router } from "react-router-dom";
//import './App.scss'

import projectRoutes from "./config/routes";
function App() {
  return (
   <Router>
    <Routes>
      {projectRoutes.map((route,index)=> (
        <Route>

          key={index}
          path={route}
          element={<projectRoutes.layout>
            <projectRoutes.component></projectRoutes.component>
            <h5>Rutas</h5>
            </projectRoutes.layout>}
        </Route>
      ))}
      
    </Routes>
   </Router>
  )
}

export default App;
