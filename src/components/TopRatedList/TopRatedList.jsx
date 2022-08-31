import MainCard from "../MainCard";
import "./index.css";

const TopRatedList = ({ cardData, nCards }) => {
  return (
    // in Cardstyle dovremmo mettere in teoria il nome di una classe (tipo cardStyle=topRatedStyle), quindi vai a maincard
    <div className="TopRatedList">
      <div className="TopRatedList_content">
        {cardData.map((cardData, ii) => (
          <MainCard
            cardData={cardData}
            value={{ className: "topRatedStyle" }}
            key={ii}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedList;
