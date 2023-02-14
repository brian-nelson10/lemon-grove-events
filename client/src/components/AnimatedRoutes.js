import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Test from '../pages/Test';
import { AnimatePresence } from 'framer-motion';
import Book from "../pages/Book";
import PackageOne from "../pages/PackageOne";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
           
<Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home/>}
              />
              <Route
              path="/Home"
              element={<Home/>}
              />
              <Route 
                path="/Book"
                element={<Book/>}
                />
                <Route 
                path="/packageone"
                element={<PackageOne/>}
                />
                <Route 
                path="/Test"
                element={<Test/>}
                />
          </Routes>
         
          </AnimatePresence>
    )
}

export default AnimatedRoutes;