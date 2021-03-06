import React from "react";
import "./Banner.css";

import bannerMoviesList from "../movie/bannerMoviesList.json";

function Banner() {

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div>
      {bannerMoviesList.map((data) => {
        return (
          <header key={data}
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${data.bannerImage})`,
            }}
          >
            <div key={data} className="banner_contents">
              <h1 className="banner_title">{data.name}</h1>
              <h1 className="banner_description">
                {truncate(data.description, 105)}
              </h1>
            </div>

            <div className="banner-fadeBottom" />
          </header>
        );
      })}
    </div>
  );
}

export default Banner;
