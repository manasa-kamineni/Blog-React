import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import bgimage from "../assests/689-800x500.jpg";
import foodImage from "../assests/food-image.jpg";
import beautyImage from "../assests/beauty.jpg";
import techImage from "../assests/technology.jpg";
import movieImage from "../assests/movie.jpg";
import newsImage from "../assests/news.jpg";
import flowerGif1 from "../assests/flower1.gif";  // Example flower GIF import
import profileIcon from "../assests/profile-icon.png"; // Import your profile icon

export default function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const staticData = [
      {
        id: 1,
        title: "FOOD",
        body: "Learn how to cook some delicious recipes that are both easy and satisfying.",
        cover: foodImage,
        category: "Food/cooking",
        likes: 23,
        createdAt: "2024-10-01T00:00:00Z",
        author: "Sreeja Gorantla",
      },
      {
        id: 2,
        title: "Beauty",
        body: "The Art of Beauty: Embracing Your Unique Radiance",
        cover: beautyImage,
        category: "Beauty/cosmetics",
        likes: 30,
        createdAt: "2024-09-25T00:00:00Z",
        author: "Gayathri",
      },
      {
        id: 3,
        title: "Movie updates",
        body: "OG was scheduled to release on September 27, 2024, but was postponed due to production delays. It was teased to be released in Summer 2025.",
        cover: movieImage,
        category: "Movies",
        likes: 295,
        createdAt: "2024-09-20T00:00:00Z",
        author: "Manasa Kamineni",
      },
      {
        id: 4,
        title: "News",
        body: "Latest updates on global news and current events.",
        cover: newsImage,
        category: "News",
        likes: 50,
        createdAt: "2024-10-05T00:00:00Z",
        author: "John Doe",
      },
    ];

    setLoading(true);
    setTimeout(() => {
      setData(staticData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-blue-500">
        <NavLink to="/home" className="text-white text-lg">Home</NavLink>

        {/* Profile Icon */}
        <NavLink to="/profile" className="flex items-center">
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </NavLink>
      </header>

      {/* Main Section */}
      <section className="container mx-auto md:flex md:mt-14">
        <article
          className="md:w-4/6 rounded-b-xl md:rounded-md pt-20 md:mx-5 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            height: "400px",
          }}
        >
          <h1 className="text-white font-bold text-center py-32 text-2xl font-mont font-medium">
            "Every story matters..Then What's yours?"
          </h1>
          <p className="text-black font-bold text-center">Author: REACT</p>
        </article>

        <div className="hidden md:block md:w-2/6">
          <NavLink to="/food">
            <article
              className="w-full rounded-lg mb-4"
              style={{
                background: `url(${foodImage})`,
                backgroundSize: "cover",
                height: "250px",
              }}
            >
              <h1 className="text-white text-center py-20 text-2xl font-mont font-bold">
                Food Recipes
              </h1>
            </article>
          </NavLink>

          <NavLink to="/technology">
            <article
              className="w-full rounded-lg mb-4"
              style={{
                background: `url(${techImage})`,
                backgroundSize: "cover",
                height: "250px",
              }}
            >
              <h1 className="text-white text-center py-20 text-2xl font-mont font-bold">
                Technology
              </h1>
            </article>
          </NavLink>
        </div>
      </section>

      {/* Flower GIF animation */}
      <div className="flowers-container flex justify-center mt-4">
        <img 
          src={flowerGif1} 
          alt="flower 1" 
          className="flower" 
          style={{ width: "100px", height: "100px" }} 
        />
      </div>

      {/* Latest Articles */}
      <div className="container md:mx-auto md:mt-10 mb-10 md:mb-10">
        <main className="container px-4">
          <h1 className="font-mont font-medium text-2xl md:text-3xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
            The Latest
          </h1>
          {loading && (
            <div className="flex px-5 w-min mx-auto py-20 md:py-40">
              <svg
                className="animate-spin w-10 inline-block mr-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="inline-block text-3xl">Loading...</p>
            </div>
          )}
          <div className="md:flex md:w-full md:justify-between md:gap-10">
            {!loading &&
              data.slice(1, 4).map((e) => (
                <article
                  className="flex md:flex-col py-5 mb-5"
                  key={e.id}
                  style={{ flex: "1 1 0", height: "250px" }}
                >
                  <div className="flex w-4/5 md:w-full">
                    <img
                      src={e.cover}
                      className="h-full md:h-40 object-cover"
                      alt={e.title}
                    />
                  </div>
                  <div className="ml-5 md:ml-0 md:flex md:flex-col md:justify-between p-5">
                    <h1 className="font-mont font-medium text-xl md:text-2xl lg:text-3xl md:w-full">
                      <NavLink
                        to={`/article/${e.id}`}
                        state={{
                          title: e.title,
                          cover: e.cover,
                          content: e.body,
                          likes: e.likes,
                          date: e.createdAt,
                          category: e.category,
                          author: e.author,
                          data: data,
                        }}
                      >
                        {e.title}
                      </NavLink>
                    </h1>
                    <p className="text-xs py-5">{e.body.slice(0, 100)}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{e.likes} Likes</span>
                      <button className="text-blue-500 text-sm">Like</button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
