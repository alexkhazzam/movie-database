export class HTTPHandler {
  constructor() {}

  sendReq(method, url, data) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return response.json().then((errData) => {
            console.log(errData);
            throw new Error("Something went wrong - server-side.");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Something went wrong!");
      });
  }

  async fetchData() {
    try {
      const responseData = await sendHttpRequest("GET", "");
      console.log(responseData);
    } catch (error) {
      alert(error.message);
    }
  }
}
