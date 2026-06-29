import { useState } from "react";
import "./App.css";
import LinkCard from "./LinkCard.jsx";

function App() {
  const [currentThemeIsLight, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!currentThemeIsLight);

  return (
    <main className={`${currentThemeIsLight ? "light-theme" : "dark-theme"}`}>
      <div>
        <button
          className="toggle-btn"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <img src="Sun Vector.svg" alt="Theme toggle"></img>
        </button>

        <div className="card-row">
          
          <LinkCard
            subTitle="My name is Olú"
            titleLine1="First Gen"
            titleLine2="Creative"
            handle="@follow.olu"
            link1Text="Spotify"
            profileImg="/Marve On Orange.png"
            link1Url="https://open.spotify.com/artist/30vo0yiN93yRq054PZLdCf?si=a5cpvDW_T4KXDu9elJYq2g"
            link2Text="Youtube"
            link2Url="https://www.youtube.com/watch?v=viV1fXoYOXM&list=RDviV1fXoYOXM&start_radio=1"
          />

          <LinkCard
            subTitle="My name is Ron"
            titleLine1="Music"
            titleLine2="Producer"
            handle="@rongottherecipe"
            link1Text="Spotify"
            profileImg="/Ron Profile Img.jpg"
            link1Url="https://open.spotify.com/artist/5OVDeaYE8ZDJaWKWLgvB80?si=UIGKF1ArTr-yLgBL7MrT3Q"
            link2Text="Youtube"
            link2Url="https://www.youtube.com/@RonGotTheRecipe"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
