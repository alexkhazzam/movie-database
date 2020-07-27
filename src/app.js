import { HTTPHandler } from "./components/HTTPHandler.js";

class App {
  fetchMovie() {
    const reqHandler = new HTTPHandler();
    reqHandler.fetchData();
  }
}

var player = DM.player(document.getElementById("player"), {
  video: "x7tgad0",
  width: "100%",
  height: "100%",
  params: {
    autoplay: true,
    mute: true,
  },
});

const movieSearcherBtn = document.querySelector("#movie-searcher__button");
movieSearcherBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const app = new App();
  app.fetchMovie();
});

const yourMoviesBtn = document.querySelector("#main-nav__movies");
yourMoviesBtn.addEventListener("click", () => {
  const moviesHeader = document.querySelector("#movies__header");
  moviesHeader.scrollIntoView({ behavior: "smooth" });
});

const navBtn = document.querySelector("#main-nav__search");
navBtn.addEventListener("click", () => {
  const movieSearcherHeader = document.querySelector("#movie-info-title");
  movieSearcherHeader.scrollIntoView({ behavior: "smooth" });
});

const scrollUp = document.querySelector("#footer-item__scroll");
scrollUp.addEventListener("click", () => {
  navBtn.scrollIntoView({ behavior: "smooth" });
});
