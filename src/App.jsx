import MovieEntity from "./components/MovieEntity";
import MainSection from "./components/MainSection";
import MainInput from "./components/MainInput";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("881819");
  const [isRenderedList, setRenderedList] = useState(false);

  // console.log(inputValue);

  return (
    <div className="App">
      <Navbar />
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRenderedList={isRenderedList}
        onFormsubmit={setRenderedList}
      />
      <MainSection />
      <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRenderedList={isRenderedList}
      />
    </div>
  );
}

export default App;
