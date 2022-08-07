import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './routes/Home';
import Users from './routes/Users';
import About from './routes/About';
import Persona from './routes/Persona';
import { Layout } from './Layout';
import { PersonaProvider } from './context/personContext'

const root = ReactDOM.createRoot(document.getElementById
  ("root"));
root.render(


  <PersonaProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:Personaid" element={<Persona />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </PersonaProvider>,

);
