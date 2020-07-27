export class HTTPHandler {
  constructor() {
    this.title = document.querySelector("#movie-searcher__title");
  }

  sendReq(method, url, data) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.responseType = "json";

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          console.log(xhr.status);
          reject(new Error("Something went wrong!"));
        }
      };

      xhr.onerror = function () {
        console.log(xhr.response);
        reject(new Error("Failed to send request!"));
      };
      xhr.send();
    });
    return promise;
  }

  async fetchData() {
    const responseData = await this.sendReq(
      "GET",
      `https://api.themoviedb.org/avengers/movie/550?api_key=8bc412bd996ff6c638a4f22bd1490b02`
    );
    console.log(responseData);
  }
}
