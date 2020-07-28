import { HTTPHandler } from "./components/HTTPHandler.js";
import { RenderMovieContent } from "./app/renderMovieContent.js";

class App {
  fetchMovie(boolean) {
    const reqHandler = new HTTPHandler();
    reqHandler.fetchData(boolean);
    const renderMovieContent = new RenderMovieContent();
    renderMovieContent.renderToDOM();
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

const movieSearchInput = document.querySelector("#movie-searcher__title");
movieSearchInput.addEventListener("keyup", () => {
  const app = new App();
  app.fetchMovie(false);
});

const movieSearchBtn = document.querySelector("#movie-searcher__button");
movieSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const app = new App();
  app.fetchMovie(true);
});
