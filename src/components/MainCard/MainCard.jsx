import "./index.css";

const MainCard = ({ cardData, value = { className: "MainCard" } }) => {
  const { title, vote_average, poster_path } = cardData;
  //qui metti sono cardStyle in rigo 3
  //poi sotto, piuttosto che mettere style={cardStyle}, dovremmo mettere in className={cardStyle} (secondo me andrebbe nel primo div, di quello MainCard)
  //quindi nel css mettiamo la classe .topRatedStyle è la definiamo

  return (
    <div className={value.className}>
      <img
        className="MainCard--img"
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      <div className="MainCard__text">
        <h3>{title}</h3>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

export default MainCard;
