import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Weather city="Budapest" />
      </header>
      <footer>
        <p>
          This project was coded by
          <a
            href="https://github.com/CsillaCsejtei"
            target="_blank"
            rel="noopener noreferrer"
          >
            Csilla Csejtei
          </a>
          , is
          <a
            href="https://github.com/CsillaCsejtei/weather-react"
            target="_blank" rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          and
          <a href="https://weather-react-hun.netlify.app/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
