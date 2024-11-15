import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Six software engineers embarked on a collaborative journey to develop Raahi, a dynamic travel agency website aimed at revolutionizing how travelers explore India. With their combined expertise in front-end and back-end technologies, these engineers have crafted a platform that offers users a seamless and secure travel experience. The engineers have ensured that Raahi is not just a booking platform but an all-in-one travel companion, focusing on user safety, convenience, and exploration. The website's intuitive interface and advanced features make it a game-changer in the travel industry. Whether you’re planning a short weekend getaway or a month-long adventure, Raahi has something for everyone!
          </p>
          <br />
          <p>
          As Raahi continues to grow, we are committed to constantly enhancing the platform with new, innovative features that will enrich the travel experience even further.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
