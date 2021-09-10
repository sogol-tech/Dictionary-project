import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="search" />
        <br />
        <footer className="footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://github.com/sogol-tech"
              target="_blank"
              rel="noreferrer"
            >
              Sogol Afshar
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/sogol-tech/dictionary-project.git"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on Github{" "}
            </a>
            and hosted on{" "}
            <a href="https://nifty-leakey-734afc.netlify.app/" target="-blank">
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
