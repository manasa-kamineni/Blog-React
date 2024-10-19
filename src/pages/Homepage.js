import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import Layout from "../components/Layout";
import bgimage from "../assests/689-800x500.jpg";
import foodImage from "../assests/food-image.jpg";
import beautyImage from "../assests/beauty.jpg";
import techImage from "../assests/technology.jpg";
import movieImage from "../assests/movie.jpg";
import newsImage from "../assests/news.jpg";

export default function Homepage() {
  const categoryid = "technology";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Replacing API call with static data
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
    ];

    setLoading(true);
    setTimeout(() => {
      setData(staticData);
      setLoading(false);
    }, 1000); // Simulate loading
  }, [categoryid]);

  return (
    <Layout>
      <section className="container mx-auto md:flex md:mt-14">
        <article
          className="md:w-4/6 rounded-b-xl md:rounded-md pt-32 md:mx-5"
          style={{ background: `url(${bgimage})`, backgroundSize: "cover" }}
        >
        <h1 className="text-white font-bold text-center py-32 text-2xl font-mont font-medium" 
    style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid rgba(255, 255, 0, 0.7)',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)'
    }}>
    "Every story matters..Then What's yours?"
</h1>
          <p className="text-black font-bold  text-center font-mont font-medium">
            Author: REACT
          </p>
        </article>
        <div className="hidden md:block md:w-2/6">
          <article
            className="w-full rounded-lg"
            style={{
              background: `url(${techImage})`,
              backgroundSize: "cover",
              height: "250px",
            }}
          >
            <h1 className="text-white text-center py-20 text-2xl font-mont font-bold">
              {/* Title for tech image can go here */}
            </h1>
          </article>
          <p className="text-black font-bold text-center mt-2">
            Author: Gowtham Reddy
          </p>

          <article
            className="w-full rounded-lg md:mt-5"
            style={{
              background: `url(${newsImage})`,
              backgroundSize: "contain", // Adjusted to 'contain' to fit the full image
              backgroundPosition: "center", // Center the image
              height: "180px", // Reduced height for better display
            }}
          >
            <h1 className="text-white text-center py-12 text-2xl font-mont font-bold">
             INDIAN POLITICS HEATS UP!!
            </h1>
          </article>
          <p className="text-black font-bold text-center mt-2">
            Author: Dinesh Reddy
          </p>
        </div>
      </section>

      <div className="container md:mx-auto md:mt-10 mb-10 md:mb-10">
        <main className="container px-4">
          <div>
            <h1 className="font-mont font-medium text-2xl md:text-3xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
              The Latest
            </h1>
          </div>

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
              data.slice(0, 3).map((e) => {
                return (
                  <article
                    className="flex md:flex-col py-5"
                    key={e.id}
                    style={{ flex: "1 1 0", height: "250px" }} // Adjusting to fill the row
                  >
                    <div className="flex w-4/5 md:w-full">
                      <img
                        src={e.cover}
                        className="h-full md:h-40 object-cover"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="ml-5 md:ml-0 md:flex md:flex-col md:justify-between p-5">
                      <h1 className="font-mont font-medium text-xl md:text-2xl lg:text-3xl md:w-full">
                        <NavLink
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
                          to={`/article/${e.id}`}
                        >
                          {e.title}
                        </NavLink>
                      </h1>
                      <p className="pt-2 font-mont font-medium text-slate-400 md:text-sm md:w-3/4 lg:hidden">
                        {e.body.substring(0, 50)}
                      </p>
                      <p className="hidden pt-2 font-mont font-medium text-slate-400 lg:text-sm lg:w-2/3 lg:block">
                        {e.body.substring(0, 150)}
                      </p>
                      <p className="pt-2 font-mont font-medium text-slate-300 md:w-3/4">
                        <span className="text-slate-800 md:pr-3">
                          {e.category}
                        </span>{" "}
                        /{" "}
                        <span className="md:pl-3">
                          <Moment format="D MMM YYYY">{e.createdAt}</Moment>
                        </span>
                      </p>
                      <p className="pt-2 font-mont font-medium text-slate-300 md:w-3/4">
                        Author: {e.author}
                      </p>
                    </div>
                  </article>
                );
              })}
          </div>
        </main>
      </div>
    </Layout>
  );
}
