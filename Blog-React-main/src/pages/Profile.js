import React, { useState } from "react";
import Layout from "../components/Layout";
// Importing images from the assets folder
import profilePic from "../assests/profile-pic.png"; // Replace with your profile picture file name
import follower1Pic from "../assests/follower1.jpg"; // Replace with actual follower image file names
import follower2Pic from "../assests/follower2.jpg";
import follower3Pic from "../assests/follower3.jpg";
import follower4Pic from "../assests/follower4.jpg";
import follower5Pic from "../assests/follower5.jpg";

// Sample blogs and followers data for demonstration
const blogs = [
  { id: 1, title: "My First Blog", snippet: "This is the first blog snippet..." },
  { id: 2, title: "Tech Trends", snippet: "Exploring the latest in technology..." },
  { id: 3, title: "Travel Diary", snippet: "My adventures across the globe..." },
];

const followers = [
  { id: 1, name: "Manasa.Kamineni", profilePicture: follower1Pic },
  { id: 2, name: "Sreeja.Gorantla", profilePicture: follower2Pic },
  { id: 3, name: "Gayathri.Inturi", profilePicture: follower3Pic },
  { id: 4, name: "Dinesh Reddy", profilePicture: follower4Pic },
  { id: 5, name: "Gowtham Reddy", profilePicture: follower5Pic },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  // Example user profile data with a custom profile picture from assets
  const userProfile = {
    name: "CSBS BATCH-02",
    email: "CSBS@gmail.com",
    age: 24,
    bio: "Passionate content writer and tech enthusiast. Always eager to learn and improve.",
    profilePicture: profilePic, // Use the imported image
    hobbies: ["Reading", "Traveling", "Coding"],
    favoriteBooks: ["The Alchemist", "To Kill a Mockingbird", "1984"],
    blogCount: blogs.length,
    followersCount: followers.length,
  };

  return (
    <Layout>
      <section className="container mx-auto mt-10 p-5 flex flex-col items-center">
        {/* Profile Header */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-around">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={userProfile.profilePicture}
                alt={`${userProfile.name}'s Profile`}
                className="w-36 h-36 rounded-full border-2 border-gray-300"
              />
            </div>
            {/* User Stats */}
            <div className="flex-1 text-center">
              <div className="flex justify-around items-center mb-4">
                <div className="text-center">
                  <h2 className="text-lg font-bold">{userProfile.blogCount}</h2>
                  <p className="text-gray-600 text-sm">Blogs Posted</p>
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-bold">{userProfile.followersCount}</h2>
                  <p className="text-gray-600 text-sm">Followers</p>
                </div>
              </div>
              {/* User Name and Bio */}
              <h1 className="text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-500 mt-2">{userProfile.bio}</p>
            </div>
          </div>

          {/* Tabs for Blogs and Followers */}
          <div className="mt-6 border-b border-gray-300">
            <button
              className={`px-4 py-2 ${
                activeTab === "blogs" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("blogs")}
            >
              Blogs
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "followers" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("followers")}
            >
              Followers
            </button>
          </div>

          {/* Content Area */}
          <div className="mt-4">
            {activeTab === "blogs" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-gray-600 text-sm">{blog.snippet}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {followers.map((follower) => (
                  <div
                    key={follower.id}
                    className="flex items-center p-2 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={follower.profilePicture}
                      alt={follower.name}
                      className="w-10 h-10 rounded-full border mr-3"
                    />
                    <p className="text-gray-700">{follower.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
