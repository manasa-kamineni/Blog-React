import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import FoodPage from "./pages/FoodPage";
import BeautyPage from "./pages/BeautyPage";
import TechnologyPage from "./pages/TechnologyPage";
import NewsPage from "./pages/NewsPage"; // Import NewsPage
import FitnessPage from "./pages/FitnessPage"; // Import FitnessPage
import Profile from "./pages/Profile"; // Import Profile page
import Login from "./pages/Login"; // Import Login page

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/home" element={<Homepage />} />

        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate replace to="/home" />} />

        {/* Other Routes */}
        <Route path="/food" element={<FoodPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/news" element={<NewsPage />} /> {/* Add News Route */}
        <Route path="/fitness" element={<FitnessPage />} /> {/* Add Fitness Route */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<SingleBlog />} />

        {/* Profile Route */}
        <Route path="/profile" element={<Profile />} /> {/* Add Profile Route */}

        {/* Login Route */}
        <Route path="/login" element={<Login />} /> {/* Add Login Route */}
      </Routes>
    </Router>
  );
}

export default App;
