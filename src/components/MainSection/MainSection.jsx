import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  return (
    //praticamente al rigo 29 bisognerebbe togliere [0] per fargli renderizzare 4 card differenti
    <div className="MainSection">
      {movieLists.popular && <MainCard cardData={movieLists.popular[0]} />}
      <div className="MainSection_right">
        {movieLists.topRated && (
          <TopRatedList cardData={movieLists.topRated} nCards={6} />
        )}
        {movieLists.upcoming && (
          <UpcomingList cardData={movieLists.upcoming} nCards={4} />
        )}
      </div>
    </div>
  );
};

export default MainSection;
