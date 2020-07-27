var player = DM.player(document.getElementById("player"), {
  video: "x7tgad0",
  width: "100%",
  height: "100%",
  params: {
    autoplay: true,
    mute: true,
  },
});

const navBtn = document.querySelector("#main-nav__button");
navBtn.addEventListener("click", () => {
  const movieSearcherHeader = document.querySelector("#movie-info-title");
  movieSearcherHeader.scrollIntoView({ behavior: "smooth" });
});
