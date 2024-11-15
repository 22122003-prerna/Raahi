import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div  className="h-[200px] w-[50%] ml-52 border rounded-e-full" style={bgImage}></div>
  );
};

export default BannerPic;
