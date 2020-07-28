import { movieTitles } from "../util/states.js";
import { OMDBData } from "../util/states.js";

export class RenderMovieContent {
  constructor() {
    this.movieContent = document.querySelector("#movie-content");
  }
  renderToDOM() {
    if (OMDBData[0] === "" || OMDBData.length === 0) {
      return;
    } else if (this.movieContent.childElementCount > 19) {
      return;
    } else {
      if (OMDBData.length > 1) {
        this.movieContent.textContent = "";
        const movieImg = document.querySelector("#movie-searched-image");
        movieImg.style.display = "none";
        OMDBData.length = 0;
      } else {
        OMDBData.forEach((movie) => {
          const movieImg = document.querySelector("#movie-searched-image");
          const li0 = document.createElement("li");
          li0.id = "title-id";
          li0.innerHTML = `<p>${movie.Title}</p>`;
          const li1 = document.createElement("li");
          li1.innnerHTML = `<p>Actors:</p>: ${movie.Actors}`;
          const li2 = document.createElement("li");
          li2.innerHTML = `<p>Awards:</p> ${movie.Awards}`;
          const li3 = document.createElement("li");
          li3.innerHTML = `<p>Box Office:</p> ${movie.BoxOffice}`;
          const li4 = document.createElement("li");
          li4.innerHTML = `<p>Country:</p> ${movie.Country}`;
          const li5 = document.createElement("li");
          li5.innerHTML = `<p>DVD:</p> ${movie.DVD}`;
          const li6 = document.createElement("li");
          li6.innerHTML = `<p>Direcotr:</p> ${movie.Director}`;
          const li7 = document.createElement("li");
          li7.innerHTML = `<p>Genre:</p> ${movie.Genre}`;
          const li8 = document.createElement("li");
          li8.innerHTML = `<p>Language:</p> ${movie.Language}`;
          const li9 = document.createElement("li");
          li9.innerHTML = `<p>Metascore:</p> ${movie.Metascore}`;
          const li10 = document.createElement("li");
          li10.innerHTML = `<p>Plot:</p> ${movie.Plot}`;
          const li11 = document.createElement("li");
          li11.innerHTML = `<p>Production:</p> ${movie.Production}`;
          const li12 = document.createElement("li");
          li12.innerHTML = `<p>Rated:</p> ${movie.Rated}`;
          const li13 = document.createElement("li");
          li13.innerHTML = `<p>Released:</p> ${movie.Released}`;
          const li14 = document.createElement("li");
          li14.innerHTML = `<p>Type:</p> ${movie.Type}`;
          const li15 = document.createElement("li");
          li15.innerHTML = `<p>Writer:</p> ${movie.Writer}`;
          const li16 = document.createElement("li");
          li16.innerHTML = `<p>Year:</p> ${movie.Year}`;
          const li17 = document.createElement("li");
          li17.innerHTML = `<p>iMDB Rating:</p> ${movie.imdbRating}`;
          const li18 = document.createElement("li");
          li18.innerHTML = `<p>iMDB Votes:</p> ${movie.imdbVotes}`;
          const p = document.querySelectorAll("#movie-content p");
          this.movieContent.append(
            li0,
            li1,
            li2,
            li3,
            li4,
            li5,
            li6,
            li7,
            li8,
            li9,
            li10,
            li11,
            li12,
            li13,
            li14,
            li15,
            li16,
            li17,
            li18
          );
          movieImg.src = `${movie.Poster}`;
          movieImg.style.marginBottom = "100px";
          movieImg.style.marginLeft = "20px";
          movieImg.style.display = "inline-block";
          movieImg.style.width = "350px";
          movieImg.style.height = "350px";
          p.forEach((pTag) => {
            pTag.style.color = "red";
            pTag.style.display = "inline";
            pTag.style.fontSize = "25px";
          });
          const title = document.querySelector("#title-id");
          title.style.fontSize = "30px";
          title.style.marginBottom = "15px";
        });
      }
    }
  }
}

// Actors: "Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths"
// Awards: "Nominated for 3 BAFTA Film Awards. Another 13 wins & 43 nominations."
// BoxOffice: "$261,835,892"
// Country: "UK, USA, Germany"
// DVD: "11 Apr 2003"
// Director: "Chris Columbus"
// Genre: "Adventure, Family, Fantasy, Mystery"
// Language: "English"
// Metascore: "63"
// Plot: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
// Production: "Warner Bros. Pictures"
// Rated: "PG"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "15 Nov 2002"
// Response: "True"
// Runtime: "161 min"
// Title: "Harry Potter and the Chamber of Secrets"
// Type: "movie"
// Website: "N/A"
// Writer: "J.K. Rowling (novel), Steve Kloves (screenplay)"
// Year: "2002"
// imdbID: "tt0295297"
// imdbRating: "7.4"
// imdbVotes: "532,767"
